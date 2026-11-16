#include<unordered_map>
#include<vector>
#include <utility>

using namespace std;


class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> freq_map;
        vector<pair<int, int>> result;

        for(int i =0; i < nums.size(); i++){
            if(freq_map.count(nums[i])){
                freq_map[nums[i]]++;
                continue;
            }
            freq_map[nums[i]] = 1;
        }

        for(const auto& [key, val]: freq_map){
            result.push_back({key, val});
        }

        int it = 0;

        for(const auto& [key, val]: sorted_map){

        }
        return result;
    }
};

int main(){
    Solution sol = new Solution();

    return 0;
}