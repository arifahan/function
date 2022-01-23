function evenify(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0){
            console.log(num,  ': is even number');
        } 
        else{
            console.log(num*2, ':is odd number');
        }
    }
}

nums = [5, 12, 89, 45, 18, 8];
    evenify(nums);

year = [2020, 2021, 2022, 2023, 2024];
    evenify(year);