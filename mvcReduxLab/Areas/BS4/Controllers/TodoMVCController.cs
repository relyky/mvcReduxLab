using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvcReduxLab.Areas.BS4.Controllers
{
    public class TodoMVCController : Controller
    {
        // GET: BS4/TodoMVC
        public ActionResult Default()
        {
            return View();
        }
    }
}