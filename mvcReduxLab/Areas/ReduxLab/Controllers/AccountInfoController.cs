using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvcReduxLab.Areas.ReduxLab.Controllers
{
    public class AccountInfoController : Controller
    {
        // GET: ReduxLab/AccountInfo
        public ActionResult AppForm()
        {
            return View();
        }
    }
}