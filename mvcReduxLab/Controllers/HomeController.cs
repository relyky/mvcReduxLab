using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using Newtonsoft.Json;

namespace mvcReduxLab.Controllers
{
    public class HomeController : Base2Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}

