using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvcReduxLab.Areas.MVCLab.Controllers
{
    public class TestMController : Controller
    {
        // GET: MVCLab/TestM
        public ActionResult Index()
        {
            return View();
        }

        // GET: MVCLab/TestM/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: MVCLab/TestM/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MVCLab/TestM/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: MVCLab/TestM/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: MVCLab/TestM/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: MVCLab/TestM/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: MVCLab/TestM/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
