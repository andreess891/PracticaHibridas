youRadioApp.factory('radioProgramsService', radioProgramsService); 

radioProgramsService.$inject = [];

function radioProgramsService() {

    var radio_list = [{"idRadio":"1","radioPrograms":[{
    				    								"name":"el gallo",
                                                        "schedule":"7:00 AM"
    				  			 					}, 
    				  			 					{
    				  									"name":"cualquier cosa",
                                                        "schedule":"8:00 AM"
    				  			 					},
    				  			 					{
    				  									"name":"dsfsdfsdf",
                                                        "schedule":"9:00 AM"
    				  			 					}]},
    				  	{"idRadio":"2","radioPrograms":[{
    				    								"name":"gdfsdfh",
                                                        "schedule":"7:00 AM"
    				  			 					}, 
    				  			 					{
    				  									"name":"ksdjkfsdf",
                                                        "schedule":"8:00 AM"
    				  			 					},
    				  			 					{
    				  									"name":"dligjdfglfd",
                                                        "schedule":"9:00 AM"
    				  			 					}]},
    				  	{"idRadio":"3","radioPrograms":[{
    				    								"name":"fdlkghjdfg",
                                                        "schedule":"7:00 AM"
    				  			 					}, 
    				  			 					{
    				  									"name":"dslkfdsjfl",
                                                        "schedule":"8:00 AM"
    				  			 					},
    				  			 					{
    				  									"name":"dfdflkgfjdsf",
                                                        "schedule":"9:00 AM"
    				  			 					}]}
    				  ];

    var service = {
        getRadio:getRadio
    };
    return service;

    function getRadio(radioId) {
        for (var i=0 ; i < radio_list.length ; i++) {
            if (angular.equals(radio_list[i]["idRadio"], radioId)) {
                return radio_list[i]["radioPrograms"];
            }
        }
        return;
    };
}