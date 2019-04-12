using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace mvcReduxLab.Controllers
{
    public class ActivitiesController : ApiController
    {
        //private ApplicationDbContext db = new ApplicationDbContext();
        private MyDatabaseEntities db = new MyDatabaseEntities();

        // GET: api/Activities
        public IQueryable<Activity> GetActivities()
        {
            //return db.Activities;
            return db.Activity.AsQueryable();
        }

        // GET: api/Activities/5
        [ResponseType(typeof(Activity))]
        public IHttpActionResult GetActivity(int id)
        {
            //Activity activity = db.Activities.Find(id);
            Activity activity = db.Activity.Find(id);
            if (activity == null)
            {
                return NotFound();
            }
            return Ok(activity);
        }

        // POST: api/Activities
        [ResponseType(typeof(Activity))]
        public IHttpActionResult PostActivity(Activity activity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //db.Activities.Add(activity);
            db.Activity.Add(activity);
            db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = activity.Id }, activity);
        }

        // DELETE: api/Activities/5
        [ResponseType(typeof(Activity))]
        public IHttpActionResult DeleteActivity(int id)
        {
            //Activity activity = db.Activities.Find(id);
            Activity activity = db.Activity.Find(id);
            if (activity == null)
            {
                return NotFound();
            }
            //db.Activities.Remove(activity);
            db.Activity.Remove(activity);
            db.SaveChanges();
            return Ok(activity);
        }
    }


}