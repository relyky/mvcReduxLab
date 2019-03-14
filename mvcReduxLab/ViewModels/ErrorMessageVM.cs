using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace mvcReduxLab.ViewModels
{
    public class ErrorMessageVM
    {
        public ErrorMessageVM(string errCode, string errMsg)
        {
            this.errCode = errCode;
            this.errMsg = errMsg;
        }

        public ErrorMessageVM(string errMsg)
        {
            this.errCode = "ERROR";
            this.errMsg = errMsg;
        }

        /// <summary>
        /// 錯誤代碼：SUCCESS, others
        /// </summary>
        public string errCode { get; set; }
        public string errMsg { get; set; }

        public static ErrorMessageVM SUCCESS
        {
            get
            {
                return new ErrorMessageVM("SUCCESS", "");
            }
        }

        public static ErrorMessageVM CHECK_DATA_FAIL
        {
            get
            {
                return new ErrorMessageVM("CHECK_DATA_FAIL", "");
            }
        }

        public static ErrorMessageVM EXCEPTION
        {
            get
            {
                return new ErrorMessageVM("EXCEPTION", "");
            }
        }
    }
}