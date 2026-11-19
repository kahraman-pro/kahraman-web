import { AppLegalPage, appLegalMetadata, appLegalParams, type AppParams } from "@/components/AppLegalPage";

export const dynamicParams = false;
export const generateStaticParams = appLegalParams;

export function generateMetadata(props: AppParams) {
  return appLegalMetadata("delete-account", props);
}

export default function Page(props: AppParams) {
  return <AppLegalPage doc="delete-account" params={props.params} />;
}
