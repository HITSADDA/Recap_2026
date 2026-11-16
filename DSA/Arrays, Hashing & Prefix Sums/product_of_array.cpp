#include<iostream>
#include<vector>


using namespace std;

class Solution {
public:
    Solution(){}
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> result;
        int product = 1;
        bool has_zero = false;

        for(int i =0; i< nums.size(); i++){
            if(nums[i] == 0 && !has_zero){
                has_zero = true;
                cout<<"first zero \n";
                continue;
            }else if(has_zero && nums[i] == 0 ){
                product = 0;
                cout<<"second zero \n";
                continue;
            }else{
                product *= nums[i];
            }
        }

        for(int i =0; i< nums.size(); i++){
            if(has_zero && nums[i] != 0){
                result.push_back(0);
                continue;
            }
            else if(has_zero && nums[i] == 0){
                result.push_back(product);
                continue;
            }
            result.push_back(product/nums[i]);
        }

        return result;
    }
};


int main(){
    Solution sl;
    vector<int> nums = {0, 0};
    vector<int> result = sl.productExceptSelf(nums);
    
    for(int i : result){
        cout<<i<<endl;
    }
    return 0;
}