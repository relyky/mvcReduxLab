using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvcReduxLab.Areas.MVCLab.Controllers
{
    public class HelloController : Controller
    {
        // GET: MVCLab/Hello
        public ActionResult Index()
        {
            return View();
        }
    }
}