// Interface Google Identity. Para produção, valide o token no Firebase/backend.
const karmaAccount=JSON.parse(localStorage.karma_account||'null');
function drawAccount(a){$('#accountName').textContent=a?a.name.split(' ')[0]:'Entrar';$('#accountGuest').hidden=!!a;$('#accountUser').hidden=!a;if(a)$('#accountDetails').innerHTML=`Conectado como <b>${esc(a.name)}</b><br><small>${esc(a.email||'Conta Google')}</small>`}
function decodeGoogle(jwt){try{return JSON.parse(atob(jwt.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')))}catch{return null}}
function onGoogleLogin(response){let p=decodeGoogle(response.credential);if(!p)return;let a={name:p.name||'Pessoa Karma',email:p.email||'',picture:p.picture||''};localStorage.karma_account=JSON.stringify(a);drawAccount(a);$('#accountDialog').close()}
$('#accountButton').onclick=()=>{$('#accountDialog').showModal();let id=window.KARMA_GOOGLE_CLIENT_ID;if(!id)return;let mount=()=>{google.accounts.id.initialize({client_id:id,callback:onGoogleLogin});google.accounts.id.renderButton($('#googleButton'),{theme:'filled_black',size:'large',text:'signin_with',shape:'pill',locale:'pt-BR'})};if(window.google?.accounts)mount();else setTimeout(mount,500)};
$('#logout').onclick=()=>{localStorage.removeItem('karma_account');drawAccount(null);$('#accountDialog').close()};drawAccount(karmaAccount);
