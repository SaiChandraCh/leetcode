var twoSum = function(nums, target) {
    var result=[];
     for(var i =0;i<nums.length;i++){
        element = nums[i]
        for(var j =i+1;j<nums.length;j++){
            if((nums[i]+nums[j])==target){
                return [i,j];
            }
        }
    }
};
twoSum([2, 11, 7, 15],9);