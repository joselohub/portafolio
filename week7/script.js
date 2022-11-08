// Script to use call() method to call function 
		
            
			function funClick() {
			let p = {
				fullName: function(addr1, addr2) {
                return `${this.fName} ${this.lName} ${addr1}, ${addr2}`;
				}
			}
				
			let p1 = {
				fName:"Brasil",
				lName: "Mexico",
			}
				
			let x = p.fullName.call(p1, "India", "USA");
			document.getElementById("mCall").innerHTML = x;
			}

// script to use apply() method

        function funClick2() {
            let p = {
            fullName: function(addr1, addr2) {
                return `${this.fName} ${this.lName} ${addr1}, ${addr2}`;
            }
        }
        let p1 = {
            fName:"Brasil",
            lName: "Mexico",
        }
            let x = p.fullName.apply(p1, ["India", "USA"]);
            document.getElementById("mCall2").innerHTML = x;
        }


// Regular Function.
        function Greeting() {
            console.log("Hello world I'm a regular function");
        };
// Execution of Regular Function.
        Greeting();

// IIFE creation and execution.
        (function() {
            console.log("Hello world I'm a IIFE function");
        })();


   
   
        function myFunction()
    {
        console.log("radio");
        // This will be executed after executing the previous log.
        (function() { console.log("computer"); })();
        console.log("TV");
    }
      
    // Calling the Function.
    myFunction();


    