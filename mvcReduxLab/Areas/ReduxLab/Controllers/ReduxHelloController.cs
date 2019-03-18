using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvcReduxLab.Areas.ReduxLab.Controllers
{
    public class ReduxHelloController : Controller
    {
        // GET: ReduxLab/ReduxHello
        public ActionResult Default()
        {
            return View();
        }
    }
}