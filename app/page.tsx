import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function LandingPage() {
    const headersList = await headers();

    const acceptLang = headersList.get("accept-language") ?? "";

    const preferred = acceptLang.split(",")[0].split("-")[0];

    const supported = ["en", "de"];
    const locale = supported.includes(preferred) ? preferred : "en";

    redirect(`/${locale}`);     
}