const mario = [ 
  [,,,,,,,,,,,,'bk','bk','bk','bk'],
	[,,,,,,,,,'bk','bk','bk','rd','rd','rd','rd','bk'],
	[,,,,,,,'bk','bk','rd','rd','rd','rd','rd','rd','rd','bk'],
  [,,,,,,'bk','rd','rd','rd','rd','rd','rd','rd','rd','wt','bk'],
  [,,,,,'bk','rd','rd','rd','rd','rd','rdd','rdd','rdd','wt','wt','bk'],
  [,,,,'bk','rd','rd','rd','rd','rdd','rdd','bk','bk','bk','bk','bk','bk','bk'],
  [,,,'bk','bk','rd','rd','rdd','rdd','bk','bk','bk','bk','bk','bk','bk','bk','bk','bk'],
  [,,'bk','rd','rd','rd','rdd','bk','bk','rd','rd','bk','bk','bk','bk','bk','bk','bk','bk','bk'],
  [,'bk','rd','rd','rdd','rdd','bk','bwl','bwl','bk','bk','bk','bw','gy','gy','bw','bk','bk'],
  [,,'bk','rd','rd','bk','bw','bwl','bwl','bwl','bk','bw','bw','wt','bk','bwl','bk'],
  [,,,'bk','bk','bk','bw','bwl','bwl','bwl','bk','bw','bw','wt','bk','bwl','bk','bk','bk'],
  [,,,,'bk','bk','bk','bw','bw','bwl','bk','bw','bw','bk','bwl','bwl','bwl','bwl','bwl','bk'],
  [,,,,'bk','bk','bk','bk','bk','bwl','bwl','bwl','bwl','bk','bk','bk','bw','bw','bw','bk'],
  [,,,,,'bk','bk','bk','bw','bw','bwl','bwl','bwl','bwl','bk','bk','bk','bk','bk'],
  [,,,,,,,'bk','bk','bk','bw','bw','bwl','bwl','bwl','bwl','bk','bk'],
  [,,,,,,'bk','bl','rd','rd','bk','bk','bw','bw','bw','bw','bk','bk'],
  [,,,,,'bk','bl','rd','rd','rd','rd','rd','bk','bk','bk','bk','wt','wt','bk','bk'],
  [,,,,'bk','bk','bl','bk','rd','rd','rd','rd','rd','rd','rd','cy','wt','wt','wt','bk','bk'],
  [,,,'bk','bwd','bk','bl','bk','bk','bk','rd','rd','rd','rd','rd','bk','cy','cy','cy','bk','bk','bk'],
  [,,,'bk','bwd','bk','bl','bl','bk','bk','bk','bk','bk','bk','bk','bk','bk','bk','bk','gy','bk','bk','bk'],
  [,,,'bk','bwd','bk','bl','bl','bk','bk','bk','bk','bk','bk','bk','bk','cyd','cyd','cyd','bk','og','og','bk','bk','bk','bk'],
  [,,,'bk','bwd','bk','bl','bl','bl','bl','bk','bk','bk','bk','cyd','cyd','cyd','cyd','cyd','og','bwd','bwd','bk','gy','gy','bk','bk'],
  [,'bk','bk','bk','bk','bk','bl','bl','bl','bl','bl','cyd','cyd','cyd','cyd','cyd','cyd','cyd','cyd','bwd','bwd','bwd','bk','bk','bk','bk','bk'],
  [,'bk','bk','gy','gy','bk','bk','bl','bl','bl','bl','bl','bl','cyd','cyd','cyd','bl','bl','bl','bwd','bwd','bk','bk','wt','wt','bk','bk'],
  ['bk','bk','gy','wt','wt','gy','bk','bk','bk','bk','bl','bl','bl','bl','bl','bl','bl','bl','bwd','bwd','bwd','bk','wt','gy','gy','wt','bk','bk'],
  ['bk','gy','wt','gy','gy','wt','gy','bk','wt','bk','bk','bl','bl','bl','bl','bk','bk','bk','bwd','bwd','bk','gy','gy','wt','wt','gy','bk','bk'],
  ['bk','gy','wt','cy', 'gy','wt','gy','bk','rdd','wt','wt','bk','bk','bk','bk','rdd','rdd','rdd','bk','bk','bk','gy','wt','gy','gy','wt','gy','bk'],
  ['bk','gy','wt','wt','wt','wt','gy','bk','rdd','rdd','rdd','wt','wt','wt','wt','wt','wt','wt','wt','rdd','bk','gy','wt','cy','gy','wt','gy','bk'],
  [,'bk','gy','wt','wt','gy','bk',,'bk','bk','bk','bk','bk','bk','bk','bk','bk','bk','bk','bk',,'bk','gy','wt','wt','gy','bk'],
  [,,'bk','bk','bk','bk',,,,,,,,,,,,,,,,,'bk','bk','bk','bk'],
];

const height = 30
const width = 28

function start() {
  render()
}

function render() {
  debug = true
  
  let html = '<table cellpadding=0 cellspacing=0>'
  
  for (let row = 0; row < height; row++) {
    html += '<tr>'
    for (let col = 0; col < width; col++) {
      html += `<td class="${mario[row][col]}"></td>`
    }
    html += '</tr>'
  }
  
  document.querySelector('#main').innerHTML = html
}

start()