var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination','ngRoute']);

myApp.controller('home6Ctrl', function($scope) {
	$scope.fName = '';
	$scope.lName = '';
	$scope.Age = '';
	$scope.Sex = '';
	$scope.Major = '';
	$scope.passw1 = '';
	$scope.passw2 = '';
	$scope.users = [
		{id:1, fName:'Hege', lName:"Pege", Age:"23", Sex:"Female", Major:"Sales", Pwd:"123" },
		{id:3, fName:'Kim',  lName:"Pim", Age:"24", Sex:"Male", Major:"Market", Pwd:"123" },
		{id:4, fName:'Sal',  lName:"Smith", Age:"25", Sex:"Male", Major:"Computer", Pwd:"123" },
		{id:7, fName:'Jack', lName:"Jones", Age:"22", Sex:"Male", Major:"Sales", Pwd:"123" },
		{id:9, fName:'John', lName:"Doe", Age:"24", Sex:"Male", Major:"Computer", Pwd:"123" },
		{id:12, fName:'Peter',lName:"Pan", Age:"32", Sex:"Male", Major:"Music", Pwd:"123" },
		{id:13, fName:'Jocelyn',lName:"Yi", Age:"29", Sex:"Female", Major:"History", Pwd:"123" },
		{id:15, fName:'Liyuan',lName:"Peng", Age:"27", Sex:"Female", Major:"Music", Pwd:"123" },
		{id:18, fName:'Yun',lName:"Ma", Age:"35", Sex:"Male", Major:"Market", Pwd:"123" },
		{id:21, fName:'Liyin',lName:"Zhao", Age:"19", Sex:"Female", Major:"Movie", Pwd:"123" },
		{id:22, fName:'Qucheng',lName:"Shen", Age:"23", Sex:"Female", Major:"Math", Pwd:"123" },
		{id:23, fName:'Jianhua',lName:"Huo", Age:"29", Sex:"Male", Major:"Movie", Pwd:"123" },
	];
	$scope.edit = true;
	$scope.error = false;
	$scope.incomplete = false; 
	$scope.hideform = true; 
	
	$scope.editUser = function(id) {
		$scope.hideform = false;
		if (id == 'new') {
			$scope.edit = true;
			$scope.incomplete = true;
			$scope.userid = id;
			$scope.fName = '';
			$scope.lName = '';
			$scope.Age = '';
			$scope.Sex = '';
			$scope.Major = '';
			$scope.passw1 = '';
			$scope.passw2 = '';
		} else {
			$scope.edit = false;
			$scope.userid = id;
			var currentUser;
			for( var i in $scope.users){
				if( $scope.users[i].id == id) currentUser = $scope.users[i];
			}
			$scope.fName = currentUser.fName;
			$scope.lName = currentUser.lName; 
			$scope.Age = currentUser.Age;
			$scope.Sex = currentUser.Sex;
			$scope.Major = currentUser.Major;
			$scope.passw1 = '';
			$scope.passw2 = '';
	    }
	};
	
	$scope.sort = function(keyname){
        $scope.sortKey = keyname; 
        $scope.reverse = !$scope.reverse;
    }

	$scope.deleteUser = function(id){
		for( var i in $scope.users){
			if( $scope.users[i].id == id) 
			{
				$scope.users.splice(i, 1);
			}
		}
	}

	$scope.$watch('passw1',function() {$scope.test();});
	$scope.$watch('passw2',function() {$scope.test();});
	$scope.$watch('fName', function() {$scope.test();});
	$scope.$watch('lName', function() {$scope.test();});
	$scope.$watch('Age', function() {$scope.test();});
	$scope.$watch('Sex', function() {$scope.test();});
	$scope.$watch('Major', function() {$scope.test();});

	$scope.test = function() {
	  if ($scope.passw1 !== $scope.passw2) {
		$scope.error = true;
		} else {
		$scope.error = false;
	  }
	  $scope.incomplete = false;
	  if ($scope.edit && (!$scope.fName.length ||
	  !$scope.lName.length ||
	  !$scope.Age.length || !$scope.Sex.length || !$scope.Major.length ||
	  !$scope.passw1.length || !$scope.passw2.length)) {
		 $scope.incomplete = true;
	  }
	};
	
	$scope.saveChange = function(){
		if( $scope.userid == 'new') {
			var max = $scope.users[$scope.users.length - 1].id + 1;
			var newUser = { id : max, 
							fName : $scope.fName,
							lName : $scope.lName, 
							Age : $scope.Age, 
							Sex : $scope.Sex, 
							Major : $scope.Major, 
							Pwd : $scope.passw1 };
			$scope.users.push(newUser);
		}
		else {
			for( var i in $scope.users){
				if( $scope.users[i].id == $scope.userid) 
				{
					$scope.users[i].Pwd = $scope.passw1;
				}
			}
		}
	}
});

myApp.controller("home2Ctrl", function($scope) {
    $scope.todoList = [
					  {name : 'chi', status: 'incompleted'},
					  {name : 'he', status: 'incompleted'},
					  {name : 'shui', status: 'incompleted'}];

	$scope.remaining = function(){
		var count = 0;
		for( var i in $scope.todoList){
			if( $scope.todoList[i].status == 'incompleted'){
				count++;
			}
		}
		return count;
	}
    $scope.addTodoList = function () {
        $scope.errortext = "";
        if (!$scope.addName) {return;}
		for( var i in $scope.todoList){
			if( $scope.todoList[i].name == $scope.addName){
				$scope.errortext = "The thing is already in your to do list.";
				if( $scope.todoList[i].status == 'completed') $scope.errortext = "The thing is already in your to do list, and you have completed it.";
				return;
			}
		}
		var newTodo = {name: $scope.addName, status: 'incompleted'};
        $scope.todoList.push(newTodo);     
		$scope.addName = "";
    }
    $scope.removeList = function (name) {
        $scope.errortext = "";    
		for( var i in $scope.todoList){
			if( $scope.todoList[i].name == name){
				$scope.todoList[i].status = "completed";
			}
		}
    }

	$scope.markAllDone = function(){
		for( var i in $scope.todoList){
			$scope.todoList[i].status = "completed";
		}
	}

	$scope.clearAllTodos = function(){
		for( var i in $scope.todoList){
			$scope.todoList[i].status = "incompleted";
		}
	}
});

myApp.filter('incomFilter', function() {
    return function(x){
		var result = new Array();
        for( var i in x){
			if( x[i].status == 'incompleted') result.push(x[i]);
		}
		return result;
    };
});

myApp.controller('home3Ctrl', function($scope) {
	$scope.expression = "";
	$scope.numDisable = false;
	$scope.signDisable = true;
	$scope.equalDisable = false;
	$scope.dotDisable = true;
	
	$scope.result = 0;
	$scope.lastSign = "";
	$scope.lastNum = "";
	
	
	$scope.numClick = function(num){
		$scope.expression = $scope.expression + num;
		$scope.lastNum = Number($scope.lastNum + num);
		$scope.signDisable = false;
		$scope.equalDisable = false;
		$scope.dotDisable = false;		
	}

	$scope.dotClick = function(){
		$scope.expression = $scope.expression + '.';
		$scope.lastNum = $scope.lastNum + '.'
		$scope.signDisable = true;
		$scope.equalDisable = true;
		$scope.dotDisable = true;
	}

	$scope.signClick = function(sign){
		$scope.result = calResult($scope.lastSign,$scope.result,$scope.lastNum );
	
		$scope.expression = $scope.expression + sign;
		$scope.lastNum = "";
		$scope.signDisable = true;
		$scope.equalDisable = true;
		$scope.dotDisable = true;
		$scope.lastSign = sign;
	}
	
	$scope.clearCal = function(){
		$scope.expression = "";
		$scope.signDisable = true;
		$scope.equalDisable = false;
		$scope.dotDisable = true;
		$scope.lastSign = "";
		$scope.lastNum = "";
		$scope.calResult = 0;
	}
	
	$scope.getResult = function(){
		$scope.result = calResult($scope.lastSign,$scope.result,$scope.lastNum );
		$scope.calResult = $scope.result;
		$scope.expression = "";
		$scope.signDisable = true;
		$scope.equalDisable = false;
		$scope.dotDisable = true;
		$scope.lastSign = "";
		$scope.lastNum = "";
	}

	function calResult(sign, result, num){
		result = Number(result);
		num = Number(num);
		switch(sign){
			case "":
				return num;	
			case "+":
				result = result + num;
				return result;
			case "-":
		        result = result - num;
				return result;
			case "*":
				result = result * num;
				return result;
			case "/":
		        result = result / num;
				return result;
			default:return result;
		}
	}
});

myApp.controller('DigitalClockCtrl', function($scope,$interval,dateFilter) {
	$scope.theclock = (dateFilter(new Date(), 'hh:mm:ss'));
	$interval(function () 
	{
	  $scope.theclock = (dateFilter(new Date(), 'hh:mm:ss'));
	}, 1000);
});

myApp.controller('home4Ctrl', function($scope) {
	$scope.numberArray = [1,3,5,22,777,1901,0,'seven'];
});

myApp.filter('ordinalFilter', function() {
    return function(x){
		var result = new Array();
        for( var i in x){
			if( typeof x[i] != 'number' || x[i] == 0) result.push(x[i]);
			else{
				if(x[i]%10 == 1) result.push(x[i]+"st");
				else if(x[i]%10 == 2) result.push(x[i]+"nd");
				else if(x[i]%10 == 3) result.push(x[i]+"rd");
				else result.push(x[i]+"th");
			}
		}
		return result;
    };
});



myApp.directive("home5Div", function() {
    return {
        restrict : "E",
        template : "<h1>Hello {{fullName}} !</h1>"
    };
});

myApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/hw7Create', {
                    templateUrl: 'hw7Create.html',
                    controller: 'hw7CreateCtrl'
                }).
                when('/hw7Edit/:editId', {
                    templateUrl: 'hw7Edit.html',
                    controller: 'hw7EditCtrl'
                }).
				when('/', {
                    templateUrl: 'userList.html',
                    controller: 'home7Ctrl'
                }).
                otherwise({
                    redirectTo: '/'
                });
}]);

myApp.service('userService', function($http) {
	return {
        getArray: (function(response) {
            return $http.get('/getUser')
            .success(function(response) {
				console.log("coming from expressjs ", response);
				return response;
            });
        })(),
		getArray2: function($scope) {
			$http.get('/tableOperation').success(function(response) {
				console.log("coming from expressjs ", response);
				$scope.users = response;
            });
        },
/*		createUser: function($scope){
			var newUser = $.param({ 
						fName : $scope.fName,
						lName : $scope.lName, 
						Age : $scope.Age, 
						Sex : $scope.Sex, 
						Major : $scope.Major, 
						Pwd : $scope.passw1 });
			$http.post('/createUser?'+ newUser).success(function (response) {
                console.log(response);
            });
		},*/
		createUser2: function($scope){
			var newUser = { 
						fName : $scope.fName,
						lName : $scope.lName, 
						Age : $scope.Age, 
						Sex : $scope.Sex, 
						Major : $scope.Major, 
						Pwd : $scope.passw1 };
			$http.post('/tableOperation', newUser).success(function (response) {
                console.log(response);
            });
		},
/*		editUser: function($scope){
			var data = $.param({
				id: $scope.editId,
                fName: $scope.fName,
                lName: $scope.lName,
                Age: $scope.Age,
				Sex: $scope.Sex,
				Major: $scope.Major
            });
			$http.put('/editUser?'+ data).success(function (response) {
                console.log(response);
            });
		},*/
		editUser: function($scope){
			var data = {
				id: $scope.editId,
                fName: $scope.fName,
                lName: $scope.lName,
                Age: $scope.Age,
				Sex: $scope.Sex,
				Major: $scope.Major
            };
			$http.put('/tableOperation/' + $scope.editId, data).success(function (response) {
                console.log(response);
            });
		},
		deleteUser: function(id){
			$http.delete('/tableOperation/'+id).success(function(response){
				console.log(response);
			});
		},		
		getById: function($scope) {
			$http.get('/tableOperation/'+$scope.editId).then(function(response) {
				console.log("coming from expressjs by id ", response.data);
				$scope.currentUser = response.data;
				$scope.fName = $scope.currentUser.fName;
				$scope.lName = $scope.currentUser.lName; 
				$scope.Age = Number($scope.currentUser.Age);
				$scope.Sex = $scope.currentUser.Sex;
				$scope.Major = $scope.currentUser.Major;
            });
        },
    };
});


myApp.controller('home7Ctrl', function($scope, $http, userService, $location) {
//	userService.getArray.success(function(data){
//          $scope.users = data;
//   });
	
	$scope.users = userService.getArray2($scope);
	
	$scope.sort = function(keyname){
        $scope.sortKey = keyname; 
        $scope.reverse = !$scope.reverse;
    }

	$scope.deleteUser = function(id){
		userService.deleteUser(id);
		$scope.users = userService.getArray2($scope);
		
	}
});

myApp.controller('hw7EditCtrl', function($scope, $location, $routeParams, userService) {
	$scope.editId = $routeParams.editId;
	$scope.error = false;
	$scope.incomplete = true; 
	$scope.fName = '';
	$scope.lName = ''; 
	$scope.Age = '';
	$scope.Sex = '';
	$scope.Major = '';
	$scope.passw1 = '';
	$scope.passw2 = '';
	
	$scope.currentUser = userService.getById($scope);
				
	$scope.$watch('passw1',function() {$scope.test();});
	$scope.$watch('passw2',function() {$scope.test();});
	$scope.$watch('fName', function() {$scope.test();});
	$scope.$watch('lName', function() {$scope.test();});
	$scope.$watch('Age', function() {$scope.test();});
	$scope.$watch('Sex', function() {$scope.test();});
	$scope.$watch('Major', function() {$scope.test();});

	$scope.test = function() {
		if ($scope.passw1 !== $scope.passw2) {
			$scope.error = true;
		} else {
			$scope.error = false;
		}
		$scope.incomplete = true; 
		if( $scope.passw1.length > 0 &&  $scope.passw2.length > 0 &&
			$scope.fName.length > 0 && $scope.lName.length > 0 &&
			$scope.Sex.length > 0 && $scope.Major.length > 0  && $scope.Age > 0)
			$scope.incomplete = false;
	};

	$scope.editChange = function(){
		userService.editUser($scope);
		$location.path('/');
	}
				
	$scope.cancle = function(){
		$location.path('/');
	}
	
});

myApp.controller('hw7CreateCtrl', function($scope, $location, userService) {
	$scope.error = false;
	$scope.incomplete = true; 
	$scope.fName = '';
	$scope.lName = ''; 
	$scope.Age = '';
	$scope.Sex = '';
	$scope.Major = '';
	$scope.passw1 = '';
	$scope.passw2 = '';

	$scope.$watch('passw1',function() {$scope.test();});
	$scope.$watch('passw2',function() {$scope.test();});
	$scope.$watch('fName', function() {$scope.test();});
	$scope.$watch('lName', function() {$scope.test();});
	$scope.$watch('Age', function() {$scope.test();});
	$scope.$watch('Sex', function() {$scope.test();});
	$scope.$watch('Major', function() {$scope.test();});

	$scope.test = function() {
		if ($scope.passw1 !== $scope.passw2) {
			$scope.error = true;
		} else {
			$scope.error = false;
		}
		$scope.incomplete = true; 
		if( $scope.passw1.length > 0 &&  $scope.passw2.length > 0 &&
			$scope.fName.length > 0 && $scope.lName.length > 0 &&
			$scope.Sex.length > 0 && $scope.Major.length > 0  && $scope.Age > 0)
			$scope.incomplete = false;
	};

	$scope.createUser = function (){
		userService.createUser2($scope);
		$location.path('/');
	}
				
	$scope.cancle = function(){
		$location.path('/');
	}
});

myApp.controller('hw9Ctrl',function($scope,$http){
	$http.get("data/xml.txt")
    .then(function(response) {
		$scope.persons = new Array();
        $scope.xmldata = response.data;
		var xmlDoc = jQuery.parseXML($scope.xmldata);
		var xmlJson = xmlToJson(xmlDoc);
		for( var i in xmlJson.persons.person){
			$scope.persons.push(xmlJson.persons.person[i]);
		}
    });
});

function xmlToJson(xml) {	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
