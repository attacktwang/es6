import $ from 'jquery';
import { resolve } from 'url';

class Interface {
    /**
     * [getOmit 获取遗漏数据]
     * @param (string) issue [当前编号]
     * return ({type})       [description] 
     */
    get Omit() {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                date: {
                    issue: issue
                },
                dataTpe: 'json',
                success: function () {
                    resolve.call(self,res)
                },
                error: function () {
                    
                }
            })
        })
    }
}