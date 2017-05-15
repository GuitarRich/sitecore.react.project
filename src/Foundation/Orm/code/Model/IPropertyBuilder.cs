using System;
using System.Linq.Expressions;
using System.Web;

namespace Sitecore.Foundation.Orm.Model
{
    public interface IPropertyBuilder
    {
        HtmlString BuildHtmlString<TModel>(TModel contentItem, Expression<Func<TModel, object>> field) where TModel : IContentBase;

        HtmlString BuildHtmlString<TModel>(TModel contentItem, Expression<Func<TModel, object>> field, object parameters) where TModel : IContentBase;

        HtmlString BuildImage<TModel>(TModel contentItem, Expression<Func<TModel, object>> field) where TModel : IContentBase;

        HtmlString BuildImage<TModel>(TModel contentItem, Expression<Func<TModel, object>> field, object parameters) where TModel : IContentBase;

        HtmlString BuildLink<TModel>(TModel contentItem, Expression<Func<TModel, object>> field) where TModel : IContentBase;

        HtmlString BuildLink<TModel>(TModel contentItem, Expression<Func<TModel, object>> field, object parameters) where TModel : IContentBase;
    }
}