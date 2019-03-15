using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace mvcReduxLab.ViewModels
{
    public class AccountInfoFormDataVM
    {
        public AccountInfo accountInfo { get; set; }

        public UserInfo userInfo { get; set; }

        #region nasted class

        public class AccountInfo {
            public string name { get; set; }
            public string email { get; set; }
            public string mobilePhone { get; set; }
        }

        public class UserInfo
        {
            public string birthday { get; set; }
            public string contactTime { get; set; }
            public string remark { get; set; }
        }

        #endregion

    }
}