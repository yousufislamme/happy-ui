import Header from "@/components/Header";
import DocsSidebar from "./DocsSidebar";
import DocsLinkMap from "./DocsLinkMap";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata = {
   title: "Documents",
   description: "welcome to happy ui",
};

const DocumentLayout = ({ children }) => {
   return (
      <html lang="en">
         <body>

            <Header />
            <div className="flex flex-row h-screen">
               <div className="min-w-[200px] dark:bg-slate-800 bg-gray-200">
                  <DocsSidebar />
               </div>
               <div className="w-full overflow-hidden">
                  {children}
               </div>
               <div className="bg-gray-200 dark:bg-slate-800 min-w-[200px]">
                  <DocsLinkMap />
               </div>
            </div>
         </body>
      </html>
   )
}

export default DocumentLayout;