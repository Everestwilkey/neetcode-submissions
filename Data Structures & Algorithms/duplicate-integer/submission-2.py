class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
      hasSeen = set()
      if nums is not None:
        for num in nums:
            if num in hasSeen:
                return True
            else:
                hasSeen.add(num)
        return False