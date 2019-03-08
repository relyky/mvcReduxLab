using System;
using System.Web.Mvc;

namespace mvcReduxLab.Controllers
{
    public class CommonDataController : Base2Controller
    {
        [HttpPost]
        public ActionResult AjaxCallTesting(string foo)
        {
            var result = new
            {
                foo = foo,
                desc = "這是成功訊息",
                dtm = DateTime.Now
            };

            return Json(result);
        }
    }
}
