function cadastrar(){
  if(document.login.usersame.value == ""){
    alert('Preencha o campo nome');
    document.login.usersame.focus();
    return false;
  }

  if(document.login.email.value == ""){
  	alert('Preencha o campo e-mail');
  	document.login.email.focus();
  	return false;
  }

  if(document.login.senha.value == ""){
  	alert('Preencha o campo senha');
  	document.login.senha.focus();
  	return false;
  }

  if(document.login.confimar_senha.value != document.login.senha.value){
  	alert('As senhas são diferentes');
  	document.login.confimar_senha.focus();
  	return false;
  }

  if(document.login.confimar_senha.value == ""){
  	alert('Preencha o campo confirmar senha');
  	document.login.confimar_senha.focus();
  	return false;
  }
}