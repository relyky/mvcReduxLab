using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvcReduxLab.Areas.ReactLab.Controllers
{
    public class QRCodeController : Controller
    {
        // GET: ReactLab/QRCode
        public ActionResult Default()
        {
            return View();
        }
    }
}