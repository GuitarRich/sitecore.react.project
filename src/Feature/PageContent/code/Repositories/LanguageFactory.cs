namespace Sitecore.Feature.PageContent.Repositories
{
    using Sitecore.Feature.PageContent.Model;
    using Sitecore.Globalization;
    using Sitecore.Links;

    public static class LanguageFactory
    {
        public static LanguageModel Create(Globalization.Language language)
        {
            return new LanguageModel
            {
                Name = language.Name,
                NativeName = language.CultureInfo.NativeName,
                Url = GetItemUrlByLanguage(language),
                Icon = string.Concat("/~/icon/", language.GetIcon(Context.Database)),
                TwoLetterCode = language.CultureInfo.TwoLetterISOLanguageName
            };
        }

        private static string GetItemUrlByLanguage(Globalization.Language language)
        {
            using (new LanguageSwitcher(language))
            {
                var options = new UrlOptions
                {
                    AlwaysIncludeServerUrl = true,
                    LanguageEmbedding = LanguageEmbedding.Always,
                    LowercaseUrls = true
                };
                var url = LinkManager.GetItemUrl(Context.Item, options);
                return StringUtil.EnsurePostfix('/', url).ToLower();
            }
        }
    }
}