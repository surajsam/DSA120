#include <bits/stdc++.h>
using namespace std;

int maxSubArraySum(vector<int>& nums) {
    int maxsubArray = INT_MIN;
    int curr = 0;
    for(int x: nums) {
        curr = max(curr + x, x);
        maxsubArray = max(curr, maxsubArray);
    }
    return maxsubArray;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    vector<int> nums{ -2,1,-3,4,-1,2,1,-5,4 };
    int result = maxSubArraySum(nums);
    cout << result << "\n";
}

