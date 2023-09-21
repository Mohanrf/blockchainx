<!-- Note :
   - You can modify the font style and form style to suit your website.
   - Code lines with comments ���Do not remove this code���  are required for the form to work properly, make sure that you do not remove these lines of code.
   - The Mandatory check script can modified as to suit your business needs.
   - It is important that you test the modified form before going live.-->


<div id='crmWebToEntityForm' style='width:600px;margin:auto;'>
   <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
   <form action='https://crm.zoho.in/crm/WebToLeadForm' name=WebToLeads70667000000113001 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory70667000000113001()' accept-charset='UTF-8' id="contact-form">
 <input type='text' style='display:none;' name='xnQsjsdp' value='820c769d87caec57c1bd22cf2f8d0aa2ca46c31ec11bd65b70a88234bf923b7e'></input>
 <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
 <input type='text' style='display:none;' name='xmIwtLD' value='6f4ac5f9acbac8b147bedfeab4007c1e0ce065ed4b076c895db9f590e7f24169'></input>
 <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
 <input type='text' style='display:none;' name='returnURL' value='https://blockchainx.tech/thank-you' > </input><br></br>
	 <!-- Do not remove this code. -->
	 <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'></input>
	 <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'></input>
	 <!-- Do not remove this code. -->
	<style>
		#crmWebToEntityForm tr , #crmWebToEntityForm td {
			padding:6px;
			border-spacing:0px;
			border-width:0px;
			}
	</style>
	 <table class="contactForm"> <tr>
                                <td class="formInput" style="padding: 3em 10px 10px 0.5em;margin-left: 13px;">
                                    <input type='text' placeholder="Name" style='width:100%;box-sizing:border-box;' maxlength='40' name='Name' required/>
                                </td>

                            </tr>

                            <tr>

                                <td class="formInput">
                                    <input type='text' style='width:100%;box-sizing:border-box;' maxlength='100' placeholder="Email" name='Email' required/>
                                </td>
                                <td style='width:30%;'></td>
                            </tr>
                            <tr>

                                <td class="formInput">
                                    <input type='text' placeholder="Skype ID" style='width:100%;box-sizing:border-box;' maxlength='50' name='Skype ID'd/>
                                </td>

                            </tr>
                            <tr>

                                <td class="formInput">
                                    <input type='text' placeholder="Mobile No" style='width:100%;box-sizing:border-box;' maxlength='30' name='Phone'/>
                                    <?php  
									    if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
									         $url = "https://";   
									    else  
									         $url = "http://";   
									    // Append the host(domain name, ip) to the URL.   
									    $url.= $_SERVER['HTTP_HOST'];   
									    
									    // Append the requested resource location to the URL   
									    $url.= $_SERVER['REQUEST_URI'];    
									      
									    // echo $url;  
									  ?> 
                                    <input type='text' id='Website' name='Website' maxlength='255'></input>
                                </td>

                            </tr>
                            <tr>

                                <td class="formInput">
                                    <textarea name='Description'  maxlength='32000'  placeholder="Explain your requirement" style="width:100%" required></textarea>

                                </td>

                            </tr>
                            <tr>
                                <td colspan="2" style="padding-bottom: 3em;text-align:center;padding-top:15px;font-size:12px;">
                                    <input class="btn" style="margin-right: 5px;cursor: pointer;font-size:12px;color:black"  id="formsubmit" type="submit" value="Submit">

                                    <input class="btn" type="reset" name="reset" style="cursor: pointer;font-size:12px;color:black" value="Reset">
                                </td>
                            </tr>
                        </table>


<script>

// var currentURL = $(location).attr('href'); //jQuery solution
var currentURL = window.location.href;
console.log('currentURL = '+currentURL);
var newVal = currentURL + $(this).text();
$("#Website").val(newVal);
$("#Website").hide();
         // $("#formsubmit").click(function(e){
         // 	e.preventDefault();

         // 	setTimeout(function(){
         // 		document.getElementById('contact-form').submit();
         // 	}, 10000);

         // })
 	  var mndFileds=new Array('Last Name');
 	  var fldLangVal=new Array('Name');
		var name='';
		var email='';

 	  function checkMandatory70667000000113001() {
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads70667000000113001'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
			 if(fieldObj.type =='file')
				{
				 alert('Please select a file to upload.');
				 fieldObj.focus();
				 return false;
				}
			alert(fldLangVal[i] +' cannot be empty.');
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.');
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   }
			 }
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		trackVisitor();
		document.getElementById('formsubmit').disabled=true;
	}
</script><script type='text/javascript' id='VisitorTracking'>var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'b332a80cee2616dbd8dec1fa1e51e6606349f075db8e81e30bd7776cb5b18379308391f65d6cc4abb3d821f3d3820190', values:{},ready:function(){$zoho.salesiq.floatbutton.visible('hide');}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);function trackVisitor(){try{if($zoho){var LDTuvidObj = document.forms['WebToLeads70667000000113001']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();}var firstnameObj = document.forms['WebToLeads70667000000113001']['First Name'];if(firstnameObj){name = firstnameObj.value +' '+name;}$zoho.salesiq.visitor.name(name);var emailObj = document.forms['WebToLeads70667000000113001']['Email'];if(emailObj){email = emailObj.value;$zoho.salesiq.visitor.email(email);}}} catch(e){}}</script>


	<script>

	var modal = document.getElementById("myModal");
	var btn = document.getElementById("formsubmit");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
	  modal.style.display = "block";
	}
	span.onclick = function() {
	  modal.style.display = "none";
	}

	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}
	</script>
	</form>
</div>
