using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvcReduxLab.Areas.ReactLab.Controllers
{
    public class DemoController : Controller
    {
        // GET: ReactLab/Demo
        public ActionResult Default()
        {
            return View();
        }
    }
}