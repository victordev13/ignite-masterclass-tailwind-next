import { Logo } from "./icons/Logo";
import NavLink from './NavLink';

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Guides
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/docs/intro">Introduction</NavLink>
            <NavLink href="/docs/quickstart">Quickstart</NavLink>
            <NavLink href="/docs/sdks">SDKs</NavLink>
            <NavLink href="/docs/auth">Authentication</NavLink>
            <NavLink href="/docs/pagination">Pagination</NavLink>
            <NavLink href="/docs/errors">Errors</NavLink>
            <NavLink href="/docs/webhooks">Webhooks</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Resources
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <NavLink href="/docs/contacts">Contacts</NavLink>
            <NavLink href="/docs/conversations">Conversations</NavLink>
            <NavLink href="/docs/messages">Messages</NavLink>
            <NavLink href="/docs/groups">Groups</NavLink>
            <NavLink href="/docs/attachments">Attachments</NavLink>
          </div>
        </div>
      </nav>
    </aside>
  )
}
