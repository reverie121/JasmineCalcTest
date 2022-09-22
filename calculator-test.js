it('should calculate the monthly rate correctly', function() {
    expect(calculateMonthlyPayment([150000, 20, 5])).toEqual('989.93');
});


it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment([103027, 20.6, 4.777])).toEqual('655.71');
});

it("should return a correct result with a minimal loan amount and a high interest rate", function() {
    expect(calculateMonthlyPayment([1, 10, 99])).toEqual('0.08');
});