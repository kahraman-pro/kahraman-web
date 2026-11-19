import { AppLegalPage, appLegalMetadata, appLegalParams, type AppParams } from "@/components/AppLegalPage";

export const dynamicParams = false;
export const generateStaticParams = appLegalParams;

export function generateMetadata(props: AppParams) {
  return appLegalMetadata("privacy", props);
}

export default function Page(props: AppParams) {
  return <AppLegalPage doc="privacy" params={props.params} />;
}
