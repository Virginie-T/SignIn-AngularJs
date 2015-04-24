SignIn.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};
    factory.students = [
    	{name: "Vanessa Trubiano", attendance: "false"}, 
    	{name: "Majda Cerne", attendance: "false"},
    	{name: "Ophelie Wilmotte", attendance: "false"},
    	{name: "Valentino Palumbo", attendance: "false"},
    	{name: "Lisandre Nadeau", attendance: "false"},
    	{name: "Hugo Toutseul", attendance: "false"},
    	{name: "Cédric Lebon", attendance: "false"},
    	{name: "Jérémy Page", attendance: "false"},
    	{name: "Victoria Raskin", attendance: "false"},
    	{name: "Jordan Maitre", attendance: "false"}
    ];

    factory.findById = function(collection, id) {
        for (var i= 0; i < factory.students.length; i++) {
            if (factory.students[i].id == id) {
                return factory.students[i];
            }
        }
        return null;
    };

    return factory;
});