({
	handleClick : function(component, event, helper) {
		var fname = component.find("fname").get("v.value");
        var  lname = component.find("lname").get("v.value");
        var bday = component.find("bday").get("v.value");
        var email = component.find("email").get("v.value");
        var accId = component.get("v.recordId");
        var action = component.get("c.InsertCon");
        action.setParams({
            'fname' : fname, 'lname' : lname, 'accId': accId, 'bday' : bday, 'email' : email
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
            }
        });
        
      $A.enqueueAction(action);
	}
})