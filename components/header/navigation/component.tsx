import { HeaderNavButton } from "@/components/header-navigation/header-nav-button";

export default function HeaderNavigationBar() {
  return (
    <div className="nav-header">
      <HeaderNavButton label={"HOME"} icon={false} items={[]} />
      <HeaderNavButton label={"ABOUT"} icon={false} items={[]} />
      <HeaderNavButton
        label={"SHOP"}
        icon={true}
        items={[
          { menuItems: ["item 1", "item 2"], label: "item 1" },
          { menuItems: ["item 1", "item 2"], label: "item 2" },
        ]}
      />
      <HeaderNavButton label={"CATALOGUE"} icon={false} items={[]} />
      <HeaderNavButton label={"NEW ARRIVALS"} icon={false} items={[]} />
      <HeaderNavButton label={"CONTACT"} icon={false} items={[]} />
    </div>
  );
}
