/**
 * @Author:       ycwei
 * @Date:         2022-05-09 15:21:44
 * @LastEditors:  ycwei
 * @LastEditTime: 2022-05-09 15:54:27
 * @Description:  公用方法
 */

/**
 * @description 根据身份证号得到出生年月
 * @param  { string } idCard   身份证号
 * @return { string } birthday 出生年月日
 */
export cosnt getBirthdayFromIdCard = (idCard) => {
	let birthday = "";
	if (idCard != null && idCard != "") {
		if (idCard.length == 15) {
			birthday = "19" + idCard.substr(6, 6);
		} else if (idCard.length == 18) {
			birthday = idCard.substr(6, 8);
		}
		birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
	}
	return birthday;
}
