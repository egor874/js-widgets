import getQueryParam from './common/helpers/UrlParser';
import WidgetFactory from './widgets/Factory';

$(() => {
  (window as any).WorkshopButlerWidgets = {
    getQueryParam,
    launch: WidgetFactory.launch,
  };
  const event = document.createEvent('HTMLEvents');
  event.initEvent('wsbwidgetsloaded', true, true);
  if ((document as any).fireEvent) {
    (document as any).fireEvent(event);
  } else {
    document.dispatchEvent(event);
  }
});
