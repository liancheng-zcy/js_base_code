let list = [1,10,6,8,7,64]

// 冒泡排序
function bubbleSort(list) {
  let len = list.length

  for(let i = len-1;i>=0;i--) {
    for(let j = 0;j < i;j++) {
      if(list[j] > list[j+1]) {
        swap(j,j+1)
      }
    }
  }
}

// 选择排序
// 对冒泡排序进行了优化，总是找到最小的放前面

function selectSort(list) {
  let len = list.length

  for(let i = 0; i < len - 1; i ++) {
    let min = i
    for(let j = min+1; j < len; j ++ ) {
      if(list[min] > list[j] ) {
        // 如果i的位置大于j的位置，记录最小位置
        min = j
      }
    }
    swap(min,i)
  }
}


// 插入排序
function insertionSort(list) {
  let len = list.length
  for(i = 1; i < len - 1; i ++) {
    let j = i
    // 记录当前选定的值
    let temp = list[j]

    while (j > 0 && list[j - 1] > list[j]) {
      list[j] = list[j - 1]
      j--
    }

    // 讲选出的j位置，放入temp
    list[j] = temp
  }
}


function swap(m,n) {
  var temp = list[m]
  list[m] = list[n]
  list[n] = temp
}

// bubbleSort(list)
// selectSort(list)
// insertionSort(list)
// 快速排序
// 基本思路：
// 1.以一个数为基准(中间的数)，比基准小的放到左边，比基准大的放到右边
// 2.再按此方法对这两部分数据分别进行快速排序（递归进行）
// 3.不能再分后退出递归，并重新将数组合并

Array.prototype.quickSort = function() {
    let len = this.length
    if(len < 2) return this
    let basic = this[0]
    let left = []
    let right = []
    for(let i = 1; i < len; i++) {
      const val = this[i]
      val >= basic && right.push(val) 
      val < basic && left.push(val)
    }
    return left.quickSort().concat(basic, right.quickSort())
}

const ascendArr = list.quickSort()


console.log(ascendArr)