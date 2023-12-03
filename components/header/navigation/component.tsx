import { HeaderNavButton } from "@/components/header-navigation/header-nav-button";

export default function HeaderNavigationBar() {
  return (
    <div className="nav-header">
      <HeaderNavButton label={"HOME"} icon={false} items={[]} href={""} />
      <HeaderNavButton label={"ABOUT"} icon={false} items={[]} href={""} />
      <HeaderNavButton
        label={"SHOP"}
        icon={true}
        items={[
          { menuItems: ["item 1", "item 2"], label: "item 1" },
          { menuItems: ["item 1", "item 2"], label: "item 2" },
        ]}
        href={"/shop"}
      />
      <HeaderNavButton label={"CATALOGUE"} icon={false} items={[]} href={""} />
      <HeaderNavButton
        label={"NEW ARRIVALS"}
        icon={false}
        items={[]}
        href={""}
      />
      <HeaderNavButton
        label={"CONTACT"}
        icon={false}
        items={[]}
        href={"/contact"}
      />
    </div>
  );
}
