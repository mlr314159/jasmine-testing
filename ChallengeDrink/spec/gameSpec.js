describe("AgeGame", function() {
    
    describe("Age tests", function(){
        it("Nine should return 'Sorry. I can't tell what drink because that age is incorrect'", function() {
            expect(whatCanIDrink("Nine")).toBe("Sorry. I can't tell what drink because that age is incorrect");
        });
    }); 
    
    describe("Age tests", function(){
        it("-1 should return 'Sorry. I can't tell what drink because that age is incorrect'", function() {
            expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drink because that age is incorrect");
        });
    });

    describe("Age tests", function(){
        it("0 should return 'Drink Toddy'", function() {
            expect(whatCanIDrink(0)).toBe("Drink Toddy");
        });
    });

    describe("Age tests", function(){
        it("13 should return 'Drink Toddy'", function() {
            expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });
    }); 

    describe("Age tests", function(){
        it("14 should return 'Drink Coke'", function() {
            expect(whatCanIDrink(14)).toBe("Drink Coke");
        });
    });

    describe("Age tests", function(){
        it("17 should return 'Drink Coke'", function() {
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
    }); 

    describe("Age tests", function(){
        it("18 should return 'Drink Beer'", function() {
            expect(whatCanIDrink(18)).toBe("Drink Beer");
        });
    }); 

    describe("Age tests", function(){
        it("20 should return 'Drink Beer'", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
    }); 

    describe("Age tests", function(){
        it("21 should return 'Drink Whisky'", function() {
            expect(whatCanIDrink(21)).toBe("Drink Whisky");
        });
    }); 

    describe("Age tests", function(){
        it("129 should return 'Drink Whisky'", function() {
            expect(whatCanIDrink(129)).toBe("Drink Whisky");
        })
    }); 

    describe("Age tests", function(){
        it("130 should return 'Sorry. I can't tell what drink because that age is incorrect'", function() {
            expect(whatCanIDrink(130)).toBe("Sorry. I can't tell what drink because that age is incorrect");
        });
    }); 




});