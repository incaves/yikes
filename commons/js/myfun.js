export default {
	dataTime(e) {
		let old = new Date(e)
		let now = new Date()
		// old
		let d = old.getTime()
		let h = old.getHours()
		let m = old.getMinutes()
		let Y = old.getFullYear()
		let M = old.getMonth() + 1
		let D = old.getDate()
		// now
		let nd = now.getTime()
		let nh = now.getHours()
		let nm = now.getMinutes()
		let nY = now.getFullYear()
		let nM = now.getMonth() + 1
		let nD = now.getDate()
		// 当天的时间
		if (D === nD && Y === nY && M === nM) {
			if (h < 10) {
				h = '0' + h;
			}
			if (m < 10) {
				m = '0' + h;
			}
			let data = h + ':' + m;
			return data
		}
		// 前天
		if (D === nD && Y === nY && M === nM) {
			if (h < 10) {
				h = '0' + h;
			}
			if (m < 10) {
				m = '0' + h;
			}
			let data = '前天' + ':' + m;
			return data
		}else {
			return Y + '/' + M + '/' + D;
		}
	}
}
