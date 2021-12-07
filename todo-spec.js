/*
describe('angularjs homepage', function() {
    it('should greet the named user', function() {
      browser.get('http://www.angularjs.org');
      element(by.model('yourName')).sendKeys('Julie');
      var greeting = element(by.binding('yourName'));
      expect(greeting.getText()).toEqual('Hello Julie!');
    });
  });
  */

  describe('Protractor baby steps',function() {  


    it('Open Angular js website',function() {
        
      browser.get("https://angularjs.org");
      console.log("I am the first step to execute");

      browser.get("https://juliemr.github.io/protractor-demo/").then(function()
      {
        console.log("I am the last step to execute");

      })

      console.log("I am the second step to execute");
    
    
    })
    
     
    
    
    //Each it block will be called as a spec
    
    
        it('close browswer', function() {
    
    })
    
    
    
    })
  