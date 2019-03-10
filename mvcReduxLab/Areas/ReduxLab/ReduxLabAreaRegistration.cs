using System.Web.Mvc;

namespace mvcReduxLab.Areas.ReduxLab
{
    public class ReduxLabAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "ReduxLab";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "ReduxLab_default",
                "ReduxLab/{controller}/{action}/{id}",
                new { action = "Default", id = UrlParameter.Optional }
            );
        }
    }
}