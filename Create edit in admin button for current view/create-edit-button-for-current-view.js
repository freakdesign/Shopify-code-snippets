(function(){

  /* check for the admin bar. Remove the check if you want to show things regardless */
  if(document.getElementById('admin_bar_iframe')){ return }

  /* basic translation */
  var lang = {
    'no':'Sorry, that can not be run here...',
    'not_json':'That does not look like json...'
  };

  /* json test */
  var isJson = function(a) {
    try { JSON.parse(a) } catch (e) { return false }
    return true;
  };

  /* shortcut fn for adding warning messages to the console */
  var nope = function(a){
    if(typeof a === 'undefined'){ var a = lang.no }
    console.warn(a)
    return false
  }

  /* build the json path */
  var getJsonPath = function(){
    return [location.protocol, '//', location.host,location.pathname,'.json'].join('')
  };

  /* get the json */
  var getJson = function(u,c){
    var req = new XMLHttpRequest();
    req.open('GET', u, false); 
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        if(typeof c === 'function'){
          if(!isJson(req.responseText)){ return nope(lang.not_json) }
          var json = JSON.parse(req.responseText);
          c(json,Object.keys(json)[0]);
        }
      }
    };
    req.send();
  };

  /* create the button and add the event listeners */
  var button = document.createElement('button');
  button.id = 'admin_bar_iframe';
  button.style = 'position: fixed;top: 70px;right: 1em;background-color: rgb(16, 206, 223);padding: .75em 1em;color: #FFF;cursor: pointer;border:none;z-index:99999';
  button.innerHTML = 'Edit This';
  button.addEventListener('click',function(e){
    e.target.blur();
    if(location.pathname === '/'){ return nope() }
    if(location.pathname.split('/')[1] === 'blogs'){
      /* fallback to the tracking script data, should it exist */
      if(typeof __st !== 'undefined' && __st.s){
        location.href = [location.protocol, '//', location.host,'/admin/articles/',__st.s.split('-')[1]].join('');
        return false;
      }
      return nope()
    }
    getJson(getJsonPath(),function(a,b){
      location.href = [location.protocol, '//', location.host,'/admin/',b+'s/',a[b].id].join('');
    })
    return false;
  });
  /* add the button to the DOM */
  document.getElementsByTagName('body')[0].appendChild(button);

})()