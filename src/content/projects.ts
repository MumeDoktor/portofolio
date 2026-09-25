import type { StaticImageData } from "next/image";

// Corner Table screens, sorted into folders under assets/corner-table/
import ctLanding from "../../assets/corner-table/web/Desktop - regular.png";
import ctWelcome from "../../assets/corner-table/onboarding/Welcome Screen.png";
import ctCities from "../../assets/corner-table/discover/Cities  - list.png";
import ctCity from "../../assets/corner-table/discover/City.png";
import ctVenues from "../../assets/corner-table/discover/Venues - list.png";
import ctVenue from "../../assets/corner-table/discover/Venue - not regular.png";
import ctPersonal from "../../assets/corner-table/chat/Inbox - Personal.png";
import ctShared from "../../assets/corner-table/chat/Inbox - Shared.png";
import ctRequests from "../../assets/corner-table/chat/Inbox - Requests.png";
import ctNotifications from "../../assets/corner-table/chat/Inbox - Notifications.png";
import ctAddEmpty from "../../assets/corner-table/add-venue/Add new venue.png";
import ctAddDetails from "../../assets/corner-table/add-venue/Add new venue-1.png";
import ctAddImages from "../../assets/corner-table/add-venue/Add new venue-5.png";
import ctAddMembers from "../../assets/corner-table/add-venue/Add new venue-2.png";
import ctAddAssign from "../../assets/corner-table/add-venue/Add new venue-3.png";
import ctAddAssigned from "../../assets/corner-table/add-venue/Add new venue-4.png";
import ctMyVenues from "../../assets/corner-table/add-venue/Preferences - venue.png";
import ctStaff from "../../assets/corner-table/staff/Staff.png";
import ctStaffInvite from "../../assets/corner-table/staff/Staff - Add new.png";
import ctStaffAssign from "../../assets/corner-table/staff/Staff - Add new-1.png";
import ctStaffInvited from "../../assets/corner-table/staff/Add new.png";
import ctStaffEdit from "../../assets/corner-table/staff/Staff - Edit.png";
import ctStaffRemove from "../../assets/corner-table/staff/Staff - Edit-1.png";
import ctGeneralInfo from "../../assets/corner-table/venue-settings/Profile settings.png";
import ctImages from "../../assets/corner-table/venue-settings/Images.png";
import ctUploadMenu from "../../assets/corner-table/venue-settings/Images-1.png";
import ctRegulars from "../../assets/corner-table/venue-settings/Venue regulars.png";

// GiBud: website captured from gibud.no (web/), native app screens (app/)
import gbHome from "../../assets/gibud/web/desktop/home.png";
import gbBrowse from "../../assets/gibud/web/desktop/browse.png";
import gbItem from "../../assets/gibud/web/desktop/item.png";
import gbVendor from "../../assets/gibud/web/desktop/vendor.png";
import gbHomeM from "../../assets/gibud/web/mobile/home.png";
import gbBrowseM from "../../assets/gibud/web/mobile/browse.png";
import gbItemM from "../../assets/gibud/web/mobile/item.png";
import gbVendorM from "../../assets/gibud/web/mobile/vendor.png";
import gbAppCategories from "../../assets/gibud/app/browse/categories.png";
import gbAppCategoryItems from "../../assets/gibud/app/browse/category-items.png";
import gbAppItem from "../../assets/gibud/app/browse/item.png";
import gbAppItemDetails from "../../assets/gibud/app/browse/item-details.png";
import gbAppItemInfo from "../../assets/gibud/app/browse/item-info.png";
import gbAppBidHistory from "../../assets/gibud/app/bidding/bid-history.png";
import gbAppMyBids from "../../assets/gibud/app/bidding/my-bids.png";
import gbAppMyAuctions from "../../assets/gibud/app/bidding/my-auction-items.png";
import gbAppCart from "../../assets/gibud/app/buying/cart.png";
import gbAppCheckout from "../../assets/gibud/app/buying/checkout.png";
import gbAppPurchases from "../../assets/gibud/app/buying/purchases.png";
import gbAppInbox from "../../assets/gibud/app/inbox/inbox.png";
import gbAppChat from "../../assets/gibud/app/inbox/chat.png";
import gbAppMenu from "../../assets/gibud/app/my-gibud/menu.png";
import gbAppMenuMore from "../../assets/gibud/app/my-gibud/menu-more.png";
import gbAppProfile from "../../assets/gibud/app/my-gibud/profile.png";
import gbAppMySales from "../../assets/gibud/app/my-gibud/my-sales.png";

// FitMind AI: app screens (from the FitMind website repo) and website captures
import fmGoal from "../../assets/fitmind-ai/app/onboarding/goal.png";
import fmTrainingSetup from "../../assets/fitmind-ai/app/onboarding/training-setup.png";
import fmExperience from "../../assets/fitmind-ai/app/onboarding/experience.png";
import fmStrengthPrs from "../../assets/fitmind-ai/app/onboarding/strength-prs.png";
import fmNoteForAi from "../../assets/fitmind-ai/app/onboarding/note-for-ai.png";
import fmSummary from "../../assets/fitmind-ai/app/onboarding/summary.png";
import fmHome from "../../assets/fitmind-ai/app/plan/home.png";
import fmFullPlan from "../../assets/fitmind-ai/app/plan/full-plan.png";
import fmPlanWeeks from "../../assets/fitmind-ai/app/plan/plan-weeks.png";
import fmThisWeek from "../../assets/fitmind-ai/app/plan/this-week.png";
import fmToday from "../../assets/fitmind-ai/app/train/today.png";
import fmExercise from "../../assets/fitmind-ai/app/train/exercise.png";
import fmSession from "../../assets/fitmind-ai/app/train/session.png";
import fmSwap from "../../assets/fitmind-ai/app/train/swap-exercise.png";
import fmComplete from "../../assets/fitmind-ai/app/train/complete.png";
import fmCoach from "../../assets/fitmind-ai/app/coach-nutrition/coach.png";
import fmNutrition from "../../assets/fitmind-ai/app/coach-nutrition/nutrition.png";
import fmProgress from "../../assets/fitmind-ai/app/progress/progress.png";
import fmWeight from "../../assets/fitmind-ai/app/progress/weight.png";
import fmMuscles from "../../assets/fitmind-ai/app/progress/muscle-analytics.png";
import fmExerciseProgress from "../../assets/fitmind-ai/app/progress/exercise-progress.png";
import fmProfile from "../../assets/fitmind-ai/app/progress/profile.png";
import fmWebHero from "../../assets/fitmind-ai/web/hero.png";
import fmWebFeatures from "../../assets/fitmind-ai/web/features.png";
import fmWebHow from "../../assets/fitmind-ai/web/how-it-works.png";
import fmWebPricing from "../../assets/fitmind-ai/web/pricing.png";

// Project avatars (app icons / brand marks) in assets/avatars/
import avCornerTable from "../../assets/avatars/corner-table.png";
import avGibud from "../../assets/avatars/gibud.png";
import avFitmind from "../../assets/avatars/fitmind-ai.png";

// AI Interview Coach and TikTok Agent Control: captured from the running apps
import aicLanding from "../../assets/ai-interview-coach/web/landing.png";
import aicFeatures from "../../assets/ai-interview-coach/web/features.png";
import aicJobAnalysis from "../../assets/ai-interview-coach/web/job-analysis.png";
import aicVoice from "../../assets/ai-interview-coach/web/voice-interview.png";
import aicHow from "../../assets/ai-interview-coach/web/how-it-works.png";
import aicSignUp from "../../assets/ai-interview-coach/web/sign-up.png";
import aicCallPoster from "../../assets/ai-interview-coach/call-poster.png";
import aicCoachingPoster from "../../assets/ai-interview-coach/coaching-poster.png";
import ttAccounts from "../../assets/tiktok-agent-control/dashboard/accounts.png";
import ttAgent from "../../assets/tiktok-agent-control/dashboard/agent.png";
import ttAudience from "../../assets/tiktok-agent-control/dashboard/audience.png";
import ttVideos from "../../assets/tiktok-agent-control/dashboard/videos.png";
import ttVideoPoster from "../../assets/tiktok-agent-control/dashboard/video-poster.png";
import ttAutopostPoster from "../../assets/tiktok-agent-control/phone/autopost-poster.jpg";

// Biblioteka: captured from the running app, with emails and classmates' surnames redacted
import bibLogin from "../../assets/biblioteka/login.png";
import bibAdminBooks from "../../assets/biblioteka/admin/all-books.png";
import bibAdminBook from "../../assets/biblioteka/admin/book.png";
import bibAdminRented from "../../assets/biblioteka/admin/rented-books.png";
import bibAdminReservations from "../../assets/biblioteka/admin/reservations.png";
import bibAdminGiveaway from "../../assets/biblioteka/admin/giveaway.png";
import bibAdminUsers from "../../assets/biblioteka/admin/users.png";
import bibStudentBooks from "../../assets/biblioteka/student/books.png";
import bibStudentBook from "../../assets/biblioteka/student/book.png";
import bibStudentReservations from "../../assets/biblioteka/student/reservations.png";
import bibStudentProfile from "../../assets/biblioteka/student/profile.png";

// AAFAS: screenshots and a recording of the full flow
import aaLandingHero from "../../assets/aafas/landing-hero.png";
import aaLandingSteps from "../../assets/aafas/landing-steps.png";
import aaUpload from "../../assets/aafas/upload.png";
import aaConnectBank from "../../assets/aafas/connect-bank.png";
import aaConsent from "../../assets/aafas/truelayer-consent.png";
import aaBankConnected from "../../assets/aafas/bank-connected.png";
import aaReport from "../../assets/aafas/report.png";
import aaHealthScore from "../../assets/aafas/health-score.png";
import aaVideoPoster from "../../assets/aafas/video-poster.png";

// Agentic Video Editing: After Effects being driven by the agent
import aveOutputPoster from "../../assets/agentic-video-editing/output-poster.png";
import aveBuildPoster from "../../assets/agentic-video-editing/build-poster.png";
import aveBuildMid from "../../assets/agentic-video-editing/build-mid.png";
import aveBuildComplete from "../../assets/agentic-video-editing/build-complete.png";
import aveTerminal from "../../assets/agentic-video-editing/pipeline-terminal.png";
import aveWarning from "../../assets/agentic-video-editing/warning-replan.png";

export type Category = "Mobile" | "AI & Agents" | "Full-stack" | "Frontend" | "Tooling";

export type Screenshot = {
  src: StaticImageData;
  caption: string;
};

export type GalleryGroup = {
  title: string;
  description?: string;
  // CSS aspect-ratio for this group's screens; defaults to 393 / 852.
  aspect?: string;
  shots: Screenshot[];
};

export type Role = {
  name: string;
  // "user" is the regular account; "staff" roles are listed lowest to highest access.
  kind: "user" | "staff";
  summary: string;
  // Job titles that fall under this access level, shown as chips.
  titles?: string[];
  can: string[];
};

export type FlowStep = {
  title: string;
  // What happens behind the scenes at this step.
  detail?: string;
  // Which part of the system handles it, shown as a small tag.
  where?: string;
};

export type ArchLayer = {
  label: string;
  // `mine` marks the parts I built and is shown as a badge, e.g. "Built solo".
  nodes: { name: string; detail: string; mine?: string }[];
};

export type Brief = {
  // The problem the product exists to solve.
  problem: string;
  // What I personally did, kept separate from what the team did.
  contribution: string;
  // What came of it.
  result: string;
  // Where each part actually stands today, e.g. mobile vs web.
  shipping?: { label: string; value: string }[];
};

export type Stat = { value: string; label: string };

export type Challenge = { problem: string; solution: string };

export type ProjectVideo = {
  // Path under public/, e.g. "/media/aafas-flow.mp4".
  src: string;
  poster: StaticImageData;
  caption: string;
  // True when the clip carries meaningful audio.
  hasSound?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: "Shipped" | "Delivered" | "Completed" | "In progress" | "Prototype";
  category: Category;
  role: string;
  // A blank line splits the lead (shown large) from the rest.
  summary: string;
  highlights: string[];
  // Plain strings render as a compact chip row; steps with details render as a timeline.
  flow?: (string | FlowStep)[];
  // Layered diagram of how the system's parts connect.
  architecture?: ArchLayer[];
  stack: string[];
  links?: { repo?: string; live?: string; store?: string };
  // Square icon shown next to the title; projects without one get a lettered tile.
  avatar?: StaticImageData;
  // Up to four phone screens shown on the home page.
  preview?: Screenshot[];
  // Phone screens on the project page, grouped by feature.
  gallery?: GalleryGroup[];
  // Short screen recordings of the product, shown above the screenshots.
  videos?: ProjectVideo[];
  // Desktop screenshots in browser frames: one shows full width, several form a grid.
  desktop?: Screenshot[];
  // Show desktop screenshots before the phone gallery (for websites).
  desktopFirst?: boolean;
  // Year heading to file this under, when it differs from the end of `year`.
  timelineYear?: string;
  // The other half of the same system.
  related?: { slug: string; label: string; note: string };
  roles?: Role[];
  // Problem, my contribution and result, shown above the screenshots.
  brief?: Brief;
  // Key numbers shown under the header.
  stats?: Stat[];
  challenges?: Challenge[];
  learned?: string[];
};

const ct = {
  chats: { src: ctPersonal, caption: "Chats & groups" },
  venue: { src: ctVenue, caption: "Venue page" },
  addDetails: { src: ctAddDetails, caption: "Add venue: details" },
  staff: { src: ctStaff, caption: "Venue staff" },
};

const gb = {
  item: { src: gbAppItem, caption: "Item: bid or buy out" },
  bidHistory: { src: gbAppBidHistory, caption: "Live bid history" },
  chat: { src: gbAppChat, caption: "Chat with a buyer" },
  myBids: { src: gbAppMyBids, caption: "My bids" },
};

const fm = {
  home: { src: fmHome, caption: "Home: today's workout" },
  session: { src: fmSession, caption: "AI weight suggestion" },
  coach: { src: fmCoach, caption: "AI Coach chat" },
  muscles: { src: fmMuscles, caption: "Muscle analytics" },
};
// FitMind screenshots are about 9:19.4
const fmAspect = "9 / 19.4";

export const projects: Project[] = [
  {
    slug: "biblioteka",
    title: "Biblioteka",
    tagline: "My high-school graduation project: a full library system I built at 17, mostly by hand, and the project where I learned the most.",
    year: "2024",
    status: "Completed",
    category: "Full-stack",
    role: "Solo: high-school graduation project",
    brief: {
      problem: "My school ran its library on paper. Lending, returns, student records and the reading room were tracked by hand, and nobody could see what was out on loan without opening a notebook.",
      contribution: "Everything: the database, the REST API, the librarian panel and the student portal. I was 17 and built it before AI assistants were any use, so every endpoint and every screen is written by hand.",
      result: "One system with two apps behind a single login, finished and presented as my secondary-school graduation project.",
      shipping: [
        { label: "Web app", value: "Completed and presented; ran locally, never deployed publicly" },
      ],
    },
    summary:
      "Biblioteka (Bosnian for \"library\") was my high-school graduation project. I built it at 17, in my third year: a complete system for running a school library and its reading room. The librarian manages books, students and loans, and students borrow books and reserve a seat to study.\n\nThis was 2024, when AI coding tools were still early and unreliable for a project this size, so I wrote almost every line by hand and worked through problems with documentation and forums. It isn't my most complex project today, but it's the one where I learned the most. It was the first time I built a whole product on my own: a React front end with separate librarian and student apps, and an Express API over MongoDB with hashed passwords, JWT sessions and image uploads.",
    highlights: [
      "Two roles with their own apps: a librarian admin panel and a student portal, chosen from the role inside the JWT.",
      "Book catalogue with cover uploads (Multer), stock you can raise or lower, editing and deletion.",
      "Lending: students request a book, the librarian assigns or returns it, and every loan shows who has it and since when.",
      "Reading-room reservations: a seat map (seats with a socket or a computer), morning, afternoon and evening time slots, and librarian approval or rejection with a note.",
      "Book giveaway: the librarian picks books for a prize draw, then runs it with a spinning wheel, with results and stats stored.",
      "Student management: create, edit and delete students with class, department, homeroom teacher and parent contact.",
      "Express REST API over MongoDB with bcrypt-hashed passwords, JWT-protected routes and CORS.",
    ],
    flow: [
      { title: "Sign in", where: "JWT", detail: "Email and password are checked with bcrypt, and a token carries the user's role." },
      { title: "Librarian manages", where: "Admin panel", detail: "Books and stock, students, loans and reading-room requests." },
      { title: "Student borrows", where: "Student portal", detail: "Browse books, request one, and see your own loans and their status." },
      { title: "Reserve a seat", where: "Reading room", detail: "Pick a time slot and a free seat, then the librarian approves or rejects it." },
      { title: "Giveaway", where: "Admin panel", detail: "Choose the prize books and spin the wheel." },
    ],
    stats: [
      { value: "17", label: "my age when I built it" },
      { value: "2", label: "apps in one: librarian panel and student portal" },
      { value: "~30", label: "REST endpoints, written without AI help" },
      { value: "5", label: "flows end to end: lending, returns, seats, students, giveaway" },
    ],
    challenges: [
      {
        problem: "One login, two very different kinds of users.",
        solution: "The server puts the user's role inside a JWT, and the front end sends librarians to the admin panel and students to their portal."
      },
      {
        problem: "Storing passwords safely, for the first time.",
        solution: "Passwords are hashed with bcrypt, and protected routes check the token on every request."
      },
      {
        problem: "The reading room needed fair rules.",
        solution: "A student can hold only one seat per time slot, and the librarian approves or rejects each request with a note."
      },
      {
        problem: "Book stock had to stay correct as books went out and came back.",
        solution: "Dedicated endpoints raise or lower the stock whenever a book is given out or returned."
      }
    ],
    learned: [
      "How a web app works end to end, because I wrote every part myself: routing, forms, a REST API, a database and authentication.",
      "Debugging mostly on my own: reading error messages, documentation and forum answers until it worked.",
      "Planning a bigger project and actually finishing it."
    ],
    stack: ["React", "Vite", "Express", "MongoDB", "JWT", "bcrypt", "Multer", "MUI", "Tailwind CSS"],
    desktop: [
      { src: bibAdminBooks, caption: "Admin: all books with stock" },
      { src: bibAdminBook, caption: "Admin: book details and stock control" },
      { src: bibAdminRented, caption: "Admin: loaned books" },
      { src: bibAdminReservations, caption: "Admin: reading-room reservations" },
      { src: bibAdminGiveaway, caption: "Admin: book giveaway" },
      { src: bibAdminUsers, caption: "Admin: students" },
      { src: bibStudentBooks, caption: "Student: available books" },
      { src: bibStudentBook, caption: "Student: request a book" },
      { src: bibStudentReservations, caption: "Student: reading-room seat map" },
      { src: bibStudentProfile, caption: "Student: my books" },
      { src: bibLogin, caption: "Sign in" },
    ],
  },
  {
    slug: "corner-table",
    avatar: avCornerTable,
    title: "Corner Table",
    tagline: "A social network for the hospitality industry that started with one idea: venues recognizing their regulars.",
    year: "2023–2024",
    status: "Delivered",
    category: "Mobile",
    role: "Flutter engineer on P23's MVP team",
    brief: {
      problem: "Founders in New York wanted a social app for hospitality: guests, venues and the staff who run them in one product they could put in front of real users.",
      contribution: "In-app chat and group messaging on Firestore, the venues and cities sections, push notifications end to end, and the registration flow together with a colleague, plus the profile and edit-profile screens.",
      result: "The MVP was delivered to the client. A later phase followed that I did not work on.",
      shipping: [
        { label: "Mobile app (Flutter)", value: "MVP delivered to the client" },
        { label: "Later phases", value: "Built without me" },
      ],
    },
    summary:
      "Corner Table is a New York hospitality product built by P23 for its founders. Bartenders and staff already know their regulars, and the app turns that recognition into something real.\n\nYou can't just call yourself a regular or say you work somewhere. A guest requests regular status and the venue's staff confirm it, and someone joining a venue's team requests a role that a manager approves. I worked on the MVP's Flutter app: the registration flow (with a colleague), profiles, chat and group messaging, the venues and cities sections, and the notifications that tie them together. The MVP was delivered and handed over to the client, and later became the foundation for a broader industry network built by another P23 team.",
    highlights: [
      "Registration flow, built together with a colleague: from sign-up to becoming a regular user or joining a venue as staff.",
      "Profile and edit-profile screens.",
      "Chat, built from scratch: users message venues directly, with conversations synced in real time through Firestore listeners.",
      "Role-aware replies: a message sent to a venue reaches its staff, and only staff whose role allows it can answer on the venue's behalf.",
      "Group chats: create a group, add people and message everyone at once.",
      "Venues: a searchable venue list sorted by city or continent, and venue pages with photo galleries, address and contact details, endorsements from other venues and similar-venue suggestions.",
      "Venue creation: a multi-step flow covering details and tags, images and menu, and team members with roles, ending with the new venue pending approval.",
      "Cities: a searchable city list with A–Z sorting, and city pages listing each city's venues with an \"In-Network only\" filter.",
      "Push notifications through Firebase Cloud Messaging, with device tokens registered and refreshed per user so each notification reaches the right phone.",
      "Different notification types, each with its own message and destination in the app: a new chat message, a venue being endorsed, and someone becoming staff at a venue.",
    ],
    flow: ["Register", "Request regular status or a staff role", "Venue confirms", "Role sets permissions", "Chat, groups & notifications"],
    roles: [
      {
        name: "Regular user",
        kind: "user",
        summary: "Anyone who signs up. Explores the network and talks to venues.",
        can: [
          "Browse cities and venues",
          "Request to become a venue's regular, confirmed by its staff",
          "Message venues directly",
          "Create groups and chat with friends",
          "Endorse other venues",
        ],
      },
      {
        name: "User access",
        kind: "staff",
        summary: "Front-of-house staff who belong to a venue's team.",
        titles: ["Host", "Server", "Bartender"],
        can: ["Joins by requesting a role that a manager approves", "Confirms guests as the venue's regulars", "Can reply to messages sent to the venue, if their role allows it"],
      },
      {
        name: "Admin access",
        kind: "staff",
        summary: "Senior roles that run the venue on Corner Table.",
        titles: ["Chef", "General manager", "Bar manager", "Floor manager"],
        can: ["Everything user access can do", "Approve people's requests to join the staff", "Edit the venue's general info, location and tags", "Manage venue images and menu"],
      },
      {
        name: "Owner",
        kind: "staff",
        summary: "Controls the venue and decides who does what.",
        titles: ["Owner"],
        can: [
          "Everything admin access can do",
          "Invite staff by search or by link",
          "Assign, change and remove staff roles",
          "Create new venues, which go to approval",
        ],
      },
    ],
    stats: [
      {
        value: "2023–24",
        label: "MVP built and handed over to the client"
      },
      {
        value: "4",
        label: "account types: regular user + 3 staff levels"
      },
      {
        value: "4",
        label: "inbox tabs: shared, requests, personal, notifications"
      },
      {
        value: "3+",
        label: "notification types, each routed to its own screen"
      }
    ],
    challenges: [
      {
        problem: "A message to a venue has no single recipient. It belongs to the venue, not to one person.",
        solution: "Messages are addressed to the venue and reach its staff, and the option to reply only appears for roles allowed to answer on the venue's behalf."
      },
      {
        problem: "Push notifications quietly stop working when a device token changes after a reinstall, a new phone or a token refresh.",
        solution: "Tokens are saved per user at sign-in and re-saved on every refresh, so someone with two phones gets notified on both and old tokens get replaced."
      },
      {
        problem: "Different events needed different messages and had to lead to different places in the app.",
        solution: "Each type (new message, venue endorsed, made staff) carries its own data, so the right text shows and a tap opens the right screen."
      },
      {
        problem: "Chat, the inbox and unread badges had to stay up to date without the user refreshing.",
        solution: "Firestore real-time listeners drive those screens, so new messages and requests appear instantly."
      }
    ],
    learned: [
      "How a real product team works: designs from a designer, code review and shipping on a client's timeline.",
      "Modelling data for Firestore, where you design around how each screen reads data instead of normalized tables.",
      "Push notifications end to end, from device tokens to opening the right screen on tap.",
      "That permissions are part of the product: who can do what shapes both the UI and the data."
    ],
    stack: ["Flutter", "Dart", "Firestore", "Firebase Cloud Messaging", "Firebase"],
    preview: [ct.chats, ct.venue, ct.addDetails, ct.staff],
    gallery: [
      {
        title: "Discover",
        description: "Sign up, then explore cities and the venues inside them.",
        shots: [
          { src: ctWelcome, caption: "Welcome" },
          { src: ctCities, caption: "Cities" },
          { src: ctCity, caption: "City: Hong Kong" },
          { src: ctVenues, caption: "Venues" },
          ct.venue,
        ],
      },
      {
        title: "Chat & notifications",
        description: "Direct messages with venues and friends, group chats, regular requests for staff to approve, and notifications.",
        shots: [
          ct.chats,
          { src: ctShared, caption: "Shared" },
          { src: ctRequests, caption: "Regular requests to approve" },
          { src: ctNotifications, caption: "Notifications" },
        ],
      },
      {
        title: "Add a venue",
        description: "A step-by-step flow: details, images and menu, then the team with their roles.",
        shots: [
          { src: ctAddEmpty, caption: "Step 1: details" },
          ct.addDetails,
          { src: ctAddImages, caption: "Step 2: images & menu" },
          { src: ctAddMembers, caption: "Step 3: members" },
          { src: ctAddAssign, caption: "Assign a role" },
          { src: ctAddAssigned, caption: "Team with roles" },
          { src: ctMyVenues, caption: "Pending approval" },
        ],
      },
      {
        title: "Staff & roles",
        description: "Owners invite staff, give each person an admin or user-access role, and can remove them.",
        shots: [
          ct.staff,
          { src: ctStaffInvite, caption: "Invite by search or link" },
          { src: ctStaffAssign, caption: "Assign a role" },
          { src: ctStaffInvited, caption: "Invite selected" },
          { src: ctStaffEdit, caption: "Edit role" },
          { src: ctStaffRemove, caption: "Remove from venue" },
        ],
      },
      {
        title: "Venue settings",
        description: "Keep the venue's info, photos, menu and regulars up to date.",
        shots: [
          { src: ctGeneralInfo, caption: "General info & location" },
          { src: ctImages, caption: "Images & menu" },
          { src: ctUploadMenu, caption: "Upload menu" },
          { src: ctRegulars, caption: "Regulars" },
        ],
      },
    ],
    desktop: [{ src: ctLanding, caption: "Waitlist landing page" }],
  },
  {
    slug: "gibud",
    avatar: avGibud,
    title: "GiBud",
    tagline: "A full rebuild of gibud.no, a Norwegian online auction marketplace: a Next.js platform plus a Flutter app I built solo.",
    year: "2025",
    status: "Shipped",
    category: "Full-stack",
    role: "Junior Full-Stack Developer at P23 · sole developer of the mobile app",
    brief: {
      problem: "GiBud sells and auctions goods in Norway. The website existed; the native app people would actually bid from did not.",
      contribution: "I was the only developer on the Flutter app — architecture, state management and every screen — and I also built or changed the API routes it depends on for auctions, bids, cart, checkout and purchases. In a team of four, I helped colleagues work through problems they were stuck on and reviewed pull requests.",
      result: "The web platform is live in Norway. The mobile app is built and release-ready, waiting on its Google Play release.",
      shipping: [
        { label: "Web platform", value: "Live at gibud.no" },
        { label: "Mobile app (Flutter)", value: "Release-ready, not yet published on Google Play" },
      ],
    },
    summary:
      "GiBud is a Norwegian marketplace where people list items and sell them by auction. As part of my job at P23, we rebuilt it from the ground up as one Next.js codebase that serves the public site, an admin dashboard and a versioned API for the mobile app.\n\nI built the GiBud mobile app on my own in Flutter for iOS and Android, and worked across the backend and the seller side of the web platform: the API the mobile app uses to browse auctions, place bids and check out, the checkout that turns a cart into purchases, item listings with media storage, invoices for sellers and the chat endpoints. The new website is live at gibud.no, and the mobile app is heading to Google Play soon.",
    highlights: [
      "Built the GiBud mobile app alone in Flutter for iOS and Android: sign-in, home and categories, search, item pages, bidding, cart, checkout, chat, selling and a \"My GiBud\" area for bids, listings, purchases and sales.",
      "Live auctions on the phone: prices, bid history and countdowns update in real time over Ably on item screens and in \"My active bids\".",
      "App architecture: BLoC for state, get_it for dependency injection, go_router for navigation, typed DTOs generated with json_serializable, and a token store for authenticated API calls.",
      "Categories cached on the device in SQLite, and data refreshed automatically when the app comes back to the foreground.",
      "Selling from the phone: pick photos from the camera or gallery and upload them with a new listing.",
      "Built versioned REST endpoints for the mobile app: auction items by category, item details, placing bids and bid history, a user's active bids and own listings, cart, checkout and purchases.",
      "Checkout that turns a cart into purchases inside a single Prisma transaction, snapshotting each item's title and image so orders stay accurate after listings change, then clearing the cart.",
      "Item listing flow with categories and media stored on Cloudflare R2 through its S3-compatible API.",
      "Invoice designer on the \"My sales\" page: sellers pick sales, set the customer, currency and tax, and generate an invoice.",
      "Chat API routes plus an Ably token endpoint for real-time direct messages.",
      "Evolved the Prisma schema with migrations and seed data as features landed.",
      "Followed the codebase's architecture: thin API routes, repositories that own validation and business logic, request IDs and structured logging to Sentry.",
    ],
    architecture: [
      {
        label: "Clients",
        nodes: [
          { name: "Mobile app", detail: "Flutter for iOS and Android. BLoC, go_router, SQLite cache.", mine: "Built solo" },
          { name: "Website", detail: "Next.js public site: browse, bid, buy and sell, plus seller invoices." },
          { name: "Admin dashboard", detail: "Refine-based back office inside the same Next.js codebase." },
        ],
      },
      {
        label: "One Next.js codebase",
        nodes: [
          {
            name: "Versioned API /api/v1",
            detail: "Thin routes call repositories that own validation and business logic. Auctions, bids, cart, checkout, purchases, chat.",
            mine: "Built mobile endpoints",
          },
        ],
      },
      {
        label: "Data & services",
        nodes: [
          { name: "PostgreSQL + Prisma", detail: "Users, items, auctions, bids, carts, purchases, invoices." },
          { name: "Cloudflare R2", detail: "Item photos and media." },
          { name: "Ably", detail: "Real-time bids and chat." },
          { name: "Auth0", detail: "Sign-in, with legacy account migration." },
        ],
      },
    ],
    flow: [
      { title: "Browse", where: "App · Web", detail: "Home, categories and search load from /api/v1. The app keeps categories cached in SQLite, so they open instantly." },
      { title: "Bid", where: "Ably", detail: "A bid is placed through the API, and the new price, bid history and countdown update live on every open screen." },
      { title: "Add to cart", where: "API", detail: "Won auctions and Buy Now items collect in the buyer's cart." },
      { title: "Check out", where: "Prisma", detail: "One database transaction turns the cart into purchases and snapshots each item's title and image, so the order stays accurate." },
      { title: "After the sale", where: "Web · Chat", detail: "The sale appears in the seller's \"My sales\", where they generate an invoice. Buyer and seller can chat about delivery." },
    ],
    links: { live: "https://gibud.no/en" },
    desktop: [
      { src: gbHome, caption: "Website: home, categories, promoted and highlighted items" },
      { src: gbBrowse, caption: "Website: listings with live bids" },
      { src: gbItem, caption: "Website: auction item with bid history" },
      { src: gbVendor, caption: "Website: vendor profile" },
    ],
    preview: [gb.item, gb.bidHistory, gb.chat, gb.myBids],
    gallery: [
      {
        title: "Mobile app: browse & bid",
        description: "The Flutter app I built on my own. Browse categories, open an item, bid or buy it out, and follow every bid live.",
        aspect: "9 / 20",
        shots: [
          { src: gbAppCategories, caption: "Categories" },
          { src: gbAppCategoryItems, caption: "Category: Electronics" },
          gb.item,
          { src: gbAppItemDetails, caption: "Top bidder & description" },
          { src: gbAppItemInfo, caption: "Auction details" },
          gb.bidHistory,
        ],
      },
      {
        title: "Mobile app: cart & checkout",
        description: "Won and Buy Now items go to the cart, then through checkout into purchases.",
        aspect: "9 / 20",
        shots: [
          { src: gbAppCart, caption: "Cart" },
          { src: gbAppCheckout, caption: "Checkout" },
          { src: gbAppPurchases, caption: "My purchases" },
        ],
      },
      {
        title: "Mobile app: inbox & chat",
        description: "Messages and notifications, with real-time chat between buyers and sellers.",
        aspect: "9 / 20",
        shots: [{ src: gbAppInbox, caption: "Inbox" }, gb.chat],
      },
      {
        title: "Mobile app: My GiBud",
        description: "Everything about your account, buying and selling in one place.",
        aspect: "9 / 20",
        shots: [
          { src: gbAppMenu, caption: "My GiBud" },
          { src: gbAppMenuMore, caption: "Selling & buying" },
          { src: gbAppProfile, caption: "Profile" },
          gb.myBids,
          { src: gbAppMyAuctions, caption: "My auction items" },
          { src: gbAppMySales, caption: "My sales & invoices" },
        ],
      },
      {
        title: "Website on a phone",
        description: "The live site, responsive down to phone size. (These are the website, not the native app.)",
        shots: [
          { src: gbHomeM, caption: "Home" },
          { src: gbBrowseM, caption: "Browse listings" },
          { src: gbItemM, caption: "Auction item" },
          { src: gbVendorM, caption: "Vendor profile" },
        ],
      },
    ],
    stats: [
      { value: "1", label: "developer on the mobile app: architecture, state and release build" },
      { value: "11", label: "app screens, from browsing and bidding to cart and checkout" },
      { value: "Live", label: "bidding over Ably: price, history and countdown update in place" },
      { value: "22", label: "API routes I built or changed on the web platform" },
    ],
    challenges: [
      {
        problem: "Bids change constantly, and a stale price on a phone means someone loses an auction.",
        solution: "Item screens and \"My bids\" subscribe to Ably channels, so the price, bid list and countdown update live. Data also refreshes when the app comes back to the foreground."
      },
      {
        problem: "Checkout touches several tables. A failure halfway would leave a cart half-bought.",
        solution: "Placing an order runs in one Prisma transaction: it creates the purchases, saves each item's title and image, and clears the cart, or it does nothing at all."
      },
      {
        problem: "Categories load on almost every screen but rarely change.",
        solution: "The app caches them on the device in SQLite, so the home screen opens instantly, even on a slow connection."
      },
      {
        problem: "One developer, one app, a long feature list.",
        solution: "A strict structure (data repositories, one BLoC per screen, get_it for dependencies, go_router for navigation, generated JSON models) kept 200+ files easy to work in."
      }
    ],
    learned: [
      "Owning a whole mobile app alone, from the first commit to checkout.",
      "Designing an API from the client's side: what the phone needs, in as few calls as possible.",
      "Real-time systems: pushing changes to the app instead of asking the server again and again.",
      "Using transactions and saved snapshots for anything that involves money."
    ],
    stack: ["Flutter", "Dart", "BLoC", "Next.js 15", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Auth0", "Cloudflare R2", "Ably", "Sentry", "Tailwind CSS"],
  },
  {
    slug: "creditgenius-micro-loans",
    title: "CreditGenius",
    timelineYear: "2025",
    tagline: "Backend and frontend work on a credit platform: reports, subscriptions, billing and micro-loans.",
    year: "2025–2026",
    status: "Shipped",
    category: "Full-stack",
    role: "Full-Stack Developer · remote",
    brief: {
      problem: "A credit platform has to keep money moving: reports and subscriptions get billed, and micro-loan repayments still have to be collected when a payment fails.",
      contribution: "Remote work, mostly on the backend: ASP.NET Core services, database schemas and queries, REST endpoints, and payment and subscription flows — including the automatic re-collection of failed micro-loan repayments. I also built Angular features and internal tools on top of those services.",
      result: "The work went into a production platform, alongside senior engineers who reviewed the database design and the deployments.",
      shipping: [
        { label: "Platform", value: "In production. A client system, so there are no screenshots here" },
      ],
    },
    summary:
      "CreditGenius is a credit platform: credit reports and scores, subscriptions, billing and micro-loans, built on ASP.NET Core with SQL Server and AWS.\n\nI worked on it remotely, mostly on the backend: services, database schemas and queries, REST endpoints and the payment and subscription flows, including the automatic retry of failed micro-loan repayments. When a scheduled repayment doesn't go through, the loan can't be left unpaid, so the system tries again on a schedule instead of waiting for someone to notice. I also built Angular features and internal tools on top of those services.",
    highlights: [
      "Built and maintained backend services with ASP.NET Core, Entity Framework and SQL Server.",
      "Designed and optimised database schemas, queries and stored procedures.",
      "Implemented business logic, REST API endpoints and payment and subscription workflows in production.",
      "Built the automatic re-collection of failed micro-loan repayments: a failed payment is picked up and retried on a schedule instead of being dropped.",
      "Built Angular frontend features and internal tools on top of those backend services.",
      "Implemented file storage and retrieval with AWS S3 for user-generated content.",
      "Built PDF generation for production reports and documents.",
      "Integrated transactional email and notifications with Amazon SES.",
      "Worked with senior engineers on database design, architecture decisions and production deployments.",
    ],
    architecture: [
      {
        label: "Clients",
        nodes: [
          { name: "Angular portal", detail: "Customer-facing features for reports, subscriptions and loans.", mine: "Built features" },
          { name: "Internal tools", detail: "Admin screens the team uses to run the platform.", mine: "Built features" },
        ],
      },
      {
        label: "Backend (ASP.NET Core)",
        nodes: [
          { name: "REST API endpoints", detail: "The contract the Angular apps call.", mine: "Built" },
          { name: "Business logic", detail: "Payment and subscription workflows, including micro-loan repayment retries.", mine: "Built" },
          { name: "Entity Framework", detail: "Data access over the SQL Server schema.", mine: "Built" },
        ],
      },
      {
        label: "Data & services",
        nodes: [
          { name: "SQL Server", detail: "Schemas, queries and stored procedures.", mine: "Designed & optimised" },
          { name: "AWS S3", detail: "Storage and retrieval of user-generated files." },
          { name: "PDF generation", detail: "Production reports and documents." },
          { name: "Amazon SES", detail: "Transactional email and notifications." },
        ],
      },
    ],
    challenges: [
      {
        problem: "A failed repayment can't just be forgotten, but it also can't be retried carelessly against someone's account.",
        solution: "Failed payments are re-collected on a schedule, so the loan keeps moving toward repayment without anyone chasing it by hand.",
      },
      {
        problem: "Money and subscription flows fail in ways a normal CRUD app never sees: declined cards, partial payments, repeated webhooks.",
        solution: "The business logic treats failure as an expected path, with the state kept in SQL Server so a payment is never half-applied.",
      },
      {
        problem: "Reports and documents had to leave the system as files people can keep, not as web pages.",
        solution: "A PDF generation workflow turns production data into documents, and Amazon SES delivers them and the related notifications.",
      },
      {
        problem: "User-generated files don't belong in a relational database.",
        solution: "Uploads and downloads go through AWS S3, with the database holding only the references.",
      },
      {
        problem: "Queries written for a small dataset get slower as real data arrives.",
        solution: "Schemas, queries and stored procedures were reworked for the access patterns the platform actually uses.",
      },
    ],
    learned: [
      "Working in a large existing codebase written by other people, and matching its conventions instead of my own.",
      "C#, ASP.NET Core and Entity Framework on SQL Server, coming from Dart, TypeScript and Python.",
      "Reviewing database design and architecture decisions with senior engineers, and shipping to production with them.",
      "That money flows need to handle failure as a normal case, not an exception.",
      "Using managed AWS services (S3 for files, SES for email) instead of building those parts myself.",
    ],
    stack: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Angular", "AWS S3", "Amazon SES"],
  },
  {
    slug: "fitmind-ai",
    avatar: avFitmind,
    title: "FitMind AI",
    tagline: "My own AI fitness coach: it builds your training and nutrition plan, then adapts it every month. Live on Google Play.",
    year: "2025–2026",
    status: "Shipped",
    category: "Mobile",
    role: "Solo: product, Flutter app, backend, website",
    brief: {
      problem: "A training plan is written once and then ignores what actually happened: the sessions you skipped, the weights that went up, the weeks you lost.",
      contribution: "All of it, alone: the product, the Flutter app, the Firebase backend and Cloud Functions, the website, the payment flow and the Play Store release.",
      result: "Published on Google Play. Subscriptions run through Lemon Squeezy as merchant of record, because Google Play's merchant payments are not available to developers in Bosnia and Herzegovina.",
      shipping: [
        { label: "Android app", value: "Live on Google Play" },
        { label: "Website", value: "Live at fitmind-ai-web.vercel.app" },
        { label: "iOS", value: "Not released" },
      ],
    },
    summary:
      "FitMind AI is a fitness app I designed, built and published on my own. A short onboarding turns your goal, experience, equipment and limits into a personalised training plan. During each workout it tells you exactly what weight to lift, and every month it recalibrates the whole plan from your real progress.\n\nThe app is Flutter with BLoC on Firebase. 24 Cloud Functions do the heavy lifting: OpenAI-powered plan generation and adaptation, workout and exercise-form analysis, exercise swaps, the AI coach chat, nutrition plans, scheduled reminders and Lemon Squeezy payments. I also built the marketing website that sells it. FitMind AI went live on Google Play in July 2026.",
    highlights: [
      "Onboarding that captures goal, training environment and equipment, experience, injuries, food restrictions, measurements, strength PRs, a starting photo and a free-text note for the AI, then generates the plan.",
      "AI-generated 4-week plan blocks (weeks → days → exercises) stored in Firestore, with monthly recalibration the user can confirm or decline.",
      "Guided training sessions: sets, reps, rest timers and an AI weight suggestion for every exercise based on your last session, plus one-tap swaps when equipment isn't available.",
      "Post-workout AI analysis and exercise-form feedback through Cloud Functions, with progress tracked day by day.",
      "AI Coach chat powered by a Firestore trigger: every reply has the context of your plan, history and check-ins, with a free message limit and upgrade path.",
      "AI weekly nutrition plans matched to calorie targets and diet type (including halal, vegetarian and vegan), with daily adjustments and supplement validation.",
      "Progress analytics built with fl_chart: weight trends, weekly volume per muscle, exercise history and PRs, body measurements and private progress photos in Firebase Storage.",
      "Scheduled push and local notifications: meal reminders, weigh-ins, rest days and cooldowns after training.",
      "Payments through Lemon Squeezy instead of Google Play billing: Google Play's merchant payments aren't available to developers in Bosnia and Herzegovina, so I took the subscription off-platform.",
      "Lemon Squeezy acts as merchant of record: it runs the checkout, takes the card payment, handles VAT and tax across countries and pays out to me, so a solo developer doesn't have to register as a merchant in each market.",
      "A webhook from Lemon Squeezy updates the subscription in Firestore, so the paywall reads one source of truth wherever the payment happened. I integrated Paddle first and moved to Lemon Squeezy.",
      "Security: Firebase App Check, Firestore and Storage rules, and token-verified HTTP functions.",
      "Marketing website in React and TypeScript with product videos, pricing, privacy policy, terms and an account-deletion page.",
      "Took the app through Google Play's release process alone: internal testing, then closed testing, then open testing, then production — including the store listing, the data-safety form and the policy requirements each track adds.",
    ],
    architecture: [
      {
        label: "Clients",
        nodes: [
          { name: "Flutter app", detail: "Android, on Google Play. BLoC, go_router, get_it, fl_chart.", mine: "Built solo" },
          { name: "Marketing website", detail: "React + TypeScript: features, pricing, legal pages.", mine: "Built solo" },
        ],
      },
      {
        label: "Firebase",
        nodes: [
          { name: "Auth", detail: "Email and Google sign-in." },
          { name: "Firestore", detail: "Plans, sessions, nutrition, chats, weights, measurements." },
          { name: "Storage", detail: "Progress photos." },
          { name: "Messaging + App Check", detail: "Push notifications and protected APIs." },
        ],
      },
      {
        label: "Cloud Functions (24)",
        nodes: [
          { name: "HTTP", detail: "generatePlan, adaptPlan, generateNutritionPlan, substituteExercise, analyzeWorkoutSession, analyzeExerciseForm…", mine: "Built solo" },
          { name: "Triggers", detail: "onChatMessageCreated (AI coach), onWorkoutSessionCreated, onWeightEntryCreated.", mine: "Built solo" },
          { name: "Scheduled", detail: "Meal reminders, weigh-ins, rest days, cooldowns.", mine: "Built solo" },
        ],
      },
      {
        label: "External",
        nodes: [
          { name: "OpenAI", detail: "Plans, coaching, analysis and nutrition." },
          { name: "Lemon Squeezy", detail: "Merchant of record: checkout, cards, VAT and payouts, with a webhook back into Firestore." },
        ],
      },
    ],
    flow: [
      { title: "Onboard", where: "App", detail: "Goal, environment, equipment, experience, limits, measurements and strength PRs feed the AI." },
      { title: "AI builds the plan", where: "Cloud Functions", detail: "generatePlan creates a 4-week block and a matching nutrition plan, saved to Firestore." },
      { title: "Train with guidance", where: "App · AI", detail: "Each exercise shows sets, reps, rest and an AI-suggested weight based on your last session. Swap exercises when needed." },
      { title: "Coach, eat, track", where: "Triggers", detail: "Chat with the AI coach, follow meals and log weight, while triggers and schedules keep the data and reminders flowing." },
      { title: "Monthly check-in", where: "adaptPlan", detail: "After the last workout of the month a check-in screen asks how the block went: can you keep this pace, should the week drop from five sessions to fewer. The AI reads those answers with your real progress and proposes the next block, which you confirm or decline." },
    ],
    stats: [
      { value: "Google Play", label: "live, built and released by me alone" },
      { value: "35", label: "screens across onboarding, plans, training, coach and progress" },
      { value: "24", label: "Cloud Functions holding every AI call and API key" },
      { value: "4 weeks", label: "per plan block, then the AI proposes the next one" },
    ],
    challenges: [
      {
        problem: "Getting an app onto Google Play as a solo developer is its own project, not a button at the end.",
        solution: "I took it through every track myself — internal, then closed, then open testing, then production — fixing what each stage asked for: the store listing, the data-safety declarations and the policy requirements that come with testers.",
      },
      {
        problem: "An AI-written plan is only useful if weeks, days, exercises and progress always line up.",
        solution: "Plans are generated as structured four-week blocks saved in Firestore. Progress only moves forward on clear events: finishing a workout, confirming recovery on a rest day, or skipping a session."
      },
      {
        problem: "Monthly recalibration can't simply overwrite the plan someone is following, and the app can't tell from data alone whether a hard month was a good one.",
        solution: "After the last workout of the month the app asks the user directly — is this pace sustainable, should the number of weekly sessions drop — and adaptPlan proposes the next block from those answers plus real progress. Nothing changes until the user confirms or declines it."
      },
      {
        problem: "AI calls cost money, and API keys can't live inside a mobile app.",
        solution: "Every OpenAI call runs in Cloud Functions, which verify the user's token and are protected by Firebase App Check."
      },
      {
        problem: "Google Play billing, the obvious way to charge for an Android app, wasn't open to me: Google Play's merchant payments aren't supported for developers in Bosnia and Herzegovina.",
        solution: "I took the subscription off-platform and used Lemon Squeezy as merchant of record. It runs the checkout and handles cards, VAT and payouts across countries, so I never touch card data. Being shut out of the default route meant designing the payment flow myself."
      },
      {
        problem: "With the payment happening outside the app, the app still has to know who is subscribed.",
        solution: "A checkout function and a Lemon Squeezy webhook update the subscription on the user in Firestore, so the paywall reads one source of truth wherever the payment came from. I integrated Paddle first and moved to Lemon Squeezy."
      },
      {
        problem: "Reminders only help if they arrive at the right moment.",
        solution: "Scheduled functions send meal, weigh-in and rest-day notifications, and cooldown reminders fire after training."
      }
    ],
    learned: [
      "Shipping a product alone: design, app, backend, payments, website, legal pages and a Google Play release.",
      "Getting reliable, structured output from an AI model and checking it before it touches user data.",
      "Serverless backends: HTTP functions, database triggers and scheduled jobs.",
      "Everything around the code that makes it a real product: privacy policy, account deletion and pricing.",
      "That where you live can shape your architecture: with Google Play billing closed to developers in Bosnia, the whole payment flow had to be built around a merchant of record instead."
    ],
    stack: ["Flutter", "Dart", "BLoC", "Firebase", "Cloud Functions", "Firestore", "OpenAI", "Lemon Squeezy", "fl_chart", "React", "TypeScript"],
    links: {
      store: "https://play.google.com/store/apps/details?id=com.mumetech.fitmindai",
      live: "https://fitmind-ai-web.vercel.app/",
    },
    preview: [fm.session, fm.coach, fm.home, fm.muscles],
    gallery: [
      {
        title: "Onboarding",
        description: "A short questionnaire that gives the AI everything it needs to build your plan.",
        aspect: fmAspect,
        shots: [
          { src: fmGoal, caption: "Your goal" },
          { src: fmTrainingSetup, caption: "Training setup & equipment" },
          { src: fmExperience, caption: "Experience & schedule" },
          { src: fmStrengthPrs, caption: "Strength PRs" },
          { src: fmNoteForAi, caption: "Note for the AI" },
          { src: fmSummary, caption: "Summary → generate plan" },
        ],
      },
      {
        title: "Home & plan",
        description: "Today's workout on the home screen, and the AI-generated plan week by week.",
        aspect: fmAspect,
        shots: [
          fm.home,
          { src: fmFullPlan, caption: "Full plan" },
          { src: fmPlanWeeks, caption: "Plan weeks" },
          { src: fmThisWeek, caption: "This week" },
        ],
      },
      {
        title: "Training",
        description: "Guided sessions with an AI weight suggestion for every exercise.",
        aspect: fmAspect,
        shots: [
          { src: fmToday, caption: "Today's workout" },
          { src: fmExercise, caption: "Exercise details" },
          fm.session,
          { src: fmSwap, caption: "Swap an exercise" },
          { src: fmComplete, caption: "Workout complete" },
        ],
      },
      {
        title: "Coach & nutrition",
        description: "An AI coach that knows your data, and a weekly meal plan with macros.",
        aspect: fmAspect,
        shots: [fm.coach, { src: fmNutrition, caption: "Nutrition plan" }],
      },
      {
        title: "Progress",
        description: "Charts and history so you and the AI can see what's working.",
        aspect: fmAspect,
        shots: [
          { src: fmProgress, caption: "Progress & consistency" },
          { src: fmWeight, caption: "Weight trend" },
          fm.muscles,
          { src: fmExerciseProgress, caption: "Exercise progress" },
          { src: fmProfile, caption: "Profile" },
        ],
      },
    ],
    desktop: [
      { src: fmWebHero, caption: "Website: hero" },
      { src: fmWebFeatures, caption: "Website: features" },
      { src: fmWebHow, caption: "Website: how it works" },
      { src: fmWebPricing, caption: "Website: pricing" },
    ],
  },
  {
    slug: "aafas-financial-adviser",
    title: "AAFAS: AI Financial Adviser",
    tagline: "Reads your bank transactions, finds the money leaking out of them, and forgets the data straight after.",
    year: "2026",
    status: "Prototype",
    category: "AI & Agents",
    role: "Co-developer (team of 2)",
    brief: {
      problem: "Money leaks quietly: subscriptions you forgot, prices that crept up, two services doing the same job. The evidence is in your statements, but nobody reads them line by line.",
      contribution: "Built with one other developer. My part was the Claude orchestration with tool use, the anomaly and duplicate detection, the chat session, login and registration, and the dashboard.",
      result: "A prototype that runs end to end: upload a statement or connect a bank, and it returns a health score and findings that trace back to code rather than to the model.",
      shipping: [
        { label: "Prototype", value: "Runs end to end locally; not publicly deployed" },
      ],
    },
    summary:
      "People lose money to subscriptions they forgot, prices that crept up, and two services doing the same job. AAFAS finds all three from transaction data alone, scores your financial health out of 100, and explains it in plain language.\n\nThe rule the whole system is built around is \"analyse, advise, forget\": raw transactions live in memory for one request and are never written to disk. There is no transactions table anywhere in it. My part was the Claude orchestration with tool use, the anomaly and duplicate detection, the chat session, login and registration, and the dashboard.",
    highlights: [
      "My part: the Claude orchestrator with tool use, anomaly and duplicate detection, the chat session, login and registration, and dashboard pagination.",
      "Five pure-Python detectors with no I/O and no AI: recurring subscriptions, anomalies, duplicate services, a health score and a 30-day forecast. They run in under 5 ms, so they're cheap to run twice per session.",
      "Recurring detection survives real data: charges are grouped per merchant, filtered by amount consistency, collapsed to one charge per month, then classified monthly or yearly by median gap.",
      "Anomaly scoring adjusted for income: the baseline uses salary credits, so someone with low median spend doesn't get every normal purchase flagged.",
      "Duplicate detection with per-category confidence: two VPNs are almost never intentional (0.95), two mobile plans often are (0.50), and a provider switch is detected and scored down.",
      "Five Claude sub-agents run in parallel, one per detector, then a synthesis call becomes the chat session, so the whole analysis costs about one round-trip instead of fifteen seconds of chaining.",
      "Chat grounded in the user's own numbers: the full subscription list and 30-day forecast go into the opening message, so \"what's charging me on the 14th?\" gets a real answer.",
      "Three input paths converge on one transaction type: CSV, PDF statements parsed by Claude, and live bank data over TrueLayer OAuth.",
      "A weekly Guardian job re-runs the detectors without the user present and only calls Claude when something fires: a new subscription, a health-score drop or an annual renewal within 7 days.",
      "Privacy enforced in code, not only in prompts: IBANs, card numbers and emails are masked before anything reaches Claude, and snapshots store findings without a single transaction.",
    ],
    architecture: [
      {
        label: "Clients",
        nodes: [
          { name: "Next.js 14 dashboard", detail: "Upload or connect a bank, then read the report and chat with it.", mine: "Built the dashboard" },
        ],
      },
      {
        label: "FastAPI",
        nodes: [
          { name: "Loaders", detail: "CSV, PDF (parsed by Claude) and TrueLayer, all producing the same Transaction type." },
          { name: "Auth", detail: "Firebase ID tokens verified on every route.", mine: "Built login & registration" },
        ],
      },
      {
        label: "Detection & AI",
        nodes: [
          { name: "5 detectors (pure Python)", detail: "Recurring, anomalies, duplicates, health score, forecast. Deterministic, under 5 ms.", mine: "Anomalies & duplicates" },
          { name: "5 Claude sub-agents", detail: "One per detector, run in parallel, each returning a short plain-language read." },
          { name: "Chat session", detail: "Synthesis call with the full findings in context, then follow-up questions.", mine: "Built" },
        ],
      },
      {
        label: "Persistence & jobs",
        nodes: [
          { name: "Firestore", detail: "Snapshots of findings, preferences and dismissals. Never transactions." },
          { name: "Weekly Guardian", detail: "Re-runs detectors on stored bank access and emails only when something changes." },
        ],
      },
    ],
    flow: [
      { title: "Get the transactions", where: "CSV · PDF · TrueLayer", detail: "Upload a file or connect a bank once; a stored refresh token keeps later runs going without the user." },
      { title: "Run the detectors", where: "Pure Python", detail: "Subscriptions, anomalies, duplicates, health score and forecast, computed deterministically in under 5 ms." },
      { title: "Explain the findings", where: "5 parallel Claude calls", detail: "Each detector's output gets its own short write-up, then one synthesis call ties them together." },
      { title: "Ask questions", where: "Chat session", detail: "The session holds the full subscription list and forecast, so answers cite real amounts and dates." },
      { title: "Forget, then watch", where: "Firestore · Guardian", detail: "Only findings are saved. A weekly job re-checks the account and emails when something actually changes." },
    ],
    stats: [
      { value: "5 + 5", label: "pure-Python detectors + parallel Claude agents" },
      { value: "< 5 ms", label: "for all detectors on six months of data" },
      { value: "0", label: "raw transactions ever written to disk" },
      { value: "3", label: "input paths — CSV, PDF and live bank data — into one type" },
    ],
    challenges: [
      {
        problem: "Letting Claude analyse someone's money without letting it make up numbers.",
        solution: "Claude runs the analysis through tools that call plain Python detectors, so every figure comes from code. The system prompt also requires each claim to trace back to a tool result.",
      },
      {
        problem: "Real bank data and sandbox data look nothing alike: one charge a month versus the same subscription repeated 90 times.",
        solution: "Charges collapse to one representative per calendar month before intervals are measured, so both paths run through the same code.",
      },
      {
        problem: "A flat anomaly threshold floods users with low spend and misses users with high spend.",
        solution: "The baseline is adjusted by income when salary credits are present, so \"unusual\" means unusual for that person.",
      },
      {
        problem: "Two services in one category aren't always a mistake.",
        solution: "Confidence is set per category, and a switching heuristic lowers it when one subscription starts as another ends, which is a provider swap rather than waste.",
      },
      {
        problem: "Chaining five AI calls after the detectors would make every analysis feel slow.",
        solution: "The work is arranged in four phases so detectors and Claude calls overlap, bringing the wall-clock cost down to roughly one round-trip.",
      },
      {
        problem: "Money in floating-point numbers drifts.",
        solution: "Every amount is whole cents in an integer, and decimals appear only when formatting for display.",
      },
    ],
    learned: [
      "Tool use: giving a model functions to call instead of asking it to calculate.",
      "That a privacy rule, taken seriously, becomes an architecture: with no transaction storage allowed, there is simply no schema to hold one.",
      "Running independent AI calls in parallel, and arranging the work so the slow parts overlap.",
      "Writing detectors as pure functions, which made them fast, deterministic and easy to unit-test.",
      "Working milestone by milestone in a shared repository with a teammate.",
    ],
    stack: ["Python", "FastAPI", "pandas", "Claude", "Firebase", "TrueLayer", "Next.js 14", "pytest"],
    links: { repo: "https://github.com/Zlaja2005/Bank-financial-adviser" },
    videos: [
      {
        src: "/media/aafas-flow.mp4",
        poster: aaVideoPoster,
        caption: "connect a bank, analyse, then ask questions",
      },
    ],
    desktop: [
      { src: aaLandingHero, caption: "Landing page" },
      { src: aaLandingSteps, caption: "Three steps to clarity" },
      { src: aaUpload, caption: "Upload a CSV or PDF statement" },
      { src: aaConnectBank, caption: "Connect a bank through TrueLayer" },
      { src: aaConsent, caption: "TrueLayer consent screen" },
      { src: aaBankConnected, caption: "Bank connected: re-analyse any time" },
      { src: aaReport, caption: "Financial report: DNA, progress and health score" },
      { src: aaHealthScore, caption: "Health score breakdown and chat" },
    ],
  },
  {
    slug: "ai-interview-coach",
    title: "AI Interview Coach",
    tagline: "Paste a real job posting, then take a live voice interview against an AI that plays the interviewer.",
    year: "2026",
    status: "Completed",
    category: "AI & Agents",
    role: "Solo: design, full-stack, AI",
    brief: {
      problem: "Interview practice is usually generic, but the questions that matter come from the actual posting, the actual company and the people who will be in the room.",
      contribution: "Solo: design, the full-stack build, and the AI work — job analysis, the live voice loop, the coaching tips and the scored report.",
      result: "A finished product you can run: paste a posting, take a live voice interview, and get a 0–100 report saved to your session history.",
      shipping: [
        { label: "Web app", value: "Complete and running locally; source on GitHub, not publicly deployed" },
      ],
    },
    summary:
      "A SaaS for interview prep that works from the actual job. You paste a posting and optionally upload your CV, and Claude builds an intelligence report on the role, the company and the people interviewing you.\n\nThen you talk to it. A voice interview runs against an AI playing that interviewer, with Groq streaming the replies fast enough to feel like a conversation and a coaching tip after every answer. When the call ends you get a scored report with specific advice, saved to your session history.",
    highlights: [
      "Job analysis with Claude returns ranked interview topics, a company profile, interviewer personas, 10–15 tailored questions and readiness insights, validated with Zod.",
      "Optional job-post URL: the page is fetched, stripped and added as extra context for the analysis.",
      "Low-latency voice loop: Groq Llama streams the interviewer's reply token by token while the browser speaks it, and Groq Whisper transcribes the candidate's answer.",
      "A non-blocking coaching tip appears after every answer (STAR, specificity, results), so feedback arrives during the call.",
      "Post-call reports score 0–100 with strengths, improvements, detected frameworks and communication notes, all stored in session history.",
      "CV parsing for PDF, DOCX and TXT stores extracted text only (no binaries) and threads it through analysis and the interview without extra queries.",
      "Auth.js v5 email/password auth with a JWT route guard, Prisma + PostgreSQL, and Docker for local development.",
    ],
    architecture: [
      {
        label: "Browser",
        nodes: [{ name: "Next.js 16 + React 19", detail: "Landing, auth, job analysis, the live call room and reports.", mine: "Built solo" }],
      },
      {
        label: "Next.js server",
        nodes: [
          { name: "proxy.ts", detail: "JWT route guard on every request." },
          { name: "Server Actions", detail: "Auth, job analysis and call setup.", mine: "Built solo" },
          { name: "API routes", detail: "/resume/upload, /call/transcribe, /call/respond, /call/report.", mine: "Built solo" },
        ],
      },
      {
        label: "AI & data",
        nodes: [
          { name: "Anthropic Claude", detail: "Job analysis and post-call reports." },
          { name: "Groq", detail: "Whisper speech-to-text and streaming Llama for the live interview." },
          { name: "PostgreSQL + Prisma", detail: "Users, CVs, analyses, calls, transcripts, reports." },
        ],
      },
    ],
    flow: [
      { title: "Give it the job", where: "Server Action", detail: "Job title, description or URL, interview stage, interviewer names and an optional CV." },
      { title: "Intelligence report", where: "Claude", detail: "Ranked topics, company profile, interviewer personas, practice questions and readiness insights." },
      { title: "Live voice interview", where: "Groq", detail: "Hold to talk: Whisper transcribes, Llama answers as the interviewer, and the browser speaks the reply." },
      { title: "Coaching as you go", where: "API", detail: "Each answer gets a quick tip in the transcript without slowing the call." },
      { title: "Scored report", where: "Claude", detail: "A 0–100 score with strengths, improvements and next steps, saved to your sessions." },
    ],
    stats: [
      { value: "2", label: "AI providers: Groq for the live call, Claude for the analysis" },
      { value: "0–100", label: "score with strengths, improvements and next steps" },
      { value: "10–15", label: "questions generated from the posting and your own CV" },
      { value: "6", label: "API routes for CV upload, the live call and the report" },
    ],
    challenges: [
      {
        problem: "A voice interview feels broken if the interviewer takes seconds to answer.",
        solution: "The live call runs on Groq (Whisper and Llama) and streams the reply word by word while the browser speaks it. Claude, which is slower but deeper, is used for the analysis and the final report."
      },
      {
        problem: "Coaching tips could slow the conversation down.",
        solution: "Tips come from a separate background request, so the interviewer's next turn never waits for them."
      },
      {
        problem: "CVs arrive as PDF, DOCX or TXT and are heavy to store.",
        solution: "They're parsed on the server and only the text is kept, then passed through the analysis and the call without extra database queries."
      },
      {
        problem: "The AI has to return data the interface can render, every time.",
        solution: "Analysis and report responses are validated with Zod before they're saved."
      }
    ],
    learned: [
      "Choosing models by job: fast models for conversation, stronger models for judgment.",
      "Streaming and real-time interfaces in Next.js.",
      "Auth.js v5, Prisma and a proper route guard on the newest Next.js."
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Claude", "Groq", "Tailwind", "shadcn/ui"],
    links: { repo: "https://github.com/MumeDoktor/ai-interview-coach" },
    videos: [
      {
        src: "/media/interview-coach-call.mp4",
        poster: aicCallPoster,
        caption: "the AI interviewer asks the first question, out loud",
        hasSound: true,
      },
      {
        src: "/media/interview-coach-coaching.mp4",
        poster: aicCoachingPoster,
        caption: "the transcript builds while coaching tips appear",
        hasSound: true,
      },
    ],
    desktop: [
      { src: aicLanding, caption: "Landing page" },
      { src: aicJobAnalysis, caption: "Job analysis: topics, interviewer style, culture" },
      { src: aicVoice, caption: "Live voice interview" },
      { src: aicHow, caption: "How it works" },
      { src: aicFeatures, caption: "Features" },
      { src: aicSignUp, caption: "Sign up" },
    ],
  },
  {
    slug: "tiktok-agent-control",
    title: "TikTok Agent Control",
    tagline: "An AI agent that runs a TikTok account's content: it reads the numbers, decides what to make, builds the video and posts it.",
    year: "2026",
    status: "Prototype",
    category: "AI & Agents",
    role: "Solo: architecture, agents, dashboard",
    brief: {
      problem: "Running a content account means reading the analytics, deciding what to make next and then making it. Those are usually three different tools, and none of them remembers the account.",
      contribution: "Solo: the architecture, the agent and its memory, the video pipeline, the background worker and the dashboard.",
      result: "A prototype where one agent per account reads real numbers, plans the next clip, builds it and posts it at the account's best time, through a real Android phone running TikTok.",
      shipping: [
        { label: "Prototype", value: "Runs locally with a background worker; read-only TikTok API access" },
        { label: "Auto-posting", value: "Through a USB-connected Android phone; opt-in, with a dry-run mode that stops before Post" },
      ],
    },
    summary:
      "A control room where each TikTok account has its own agent. Mine is called Nova. It knows only its account: the analytics, the posts that worked and failed, and the content rules you set. It reads that data, writes an honest analysis of what's working, decides what to make next and produces the clip.\n\nYou can ask for a video in the chat or switch on Autopilot, which makes three videos a week timed to the account's best posting slots. TikTok's API won't let an unaudited app post, so publishing goes through the TikTok app on a real Android phone plugged into the PC: at the slot the video is copied over, opened in TikTok's editor, captioned with its hashtags and posted, with no one touching the phone.",
    highlights: [
      "One agent per account with layered memory: a binding content profile, standing directives distilled from chat (say \"stop using trending audio\" once and it holds), and live data.",
      "Account analysis written by Claude from real numbers: which topics and lengths carry the account, when posting works, and what is dragging the median down.",
      "Autopilot that schedules three videos a week from the account's own best times, starting each build three hours before its slot, with a Windows notification when it's done.",
      "Automatic publishing through a real phone: the worker copies the finished video over adb, opens it in TikTok, types the caption and hashtags and taps Post. Buttons are found by their text with uiautomator2, not by screen position, so it works on any screen size.",
      "Video production pipeline: find a source (long YouTube interviews, or public-domain footage from DVIDS and the Internet Archive), turn captions into sentences, pick the moment, then cut and caption it.",
      "Two render paths: Remotion for finished clips, or a bridge to my After Effects agent that leaves an edit in an AE project for a human to review.",
      "Rights-first safety rails: footage starts as unverified, music comes only from a folder the owner filled, and phone posting is opt-in, with a dry run that stops on the Post screen.",
      "Background worker where every step is a row in a jobs table with retries and exponential backoff, so one failed download never stalls the pipeline.",
      "Dashboard with follower and view trends, per-video stats, the agent chat and a live log of what the agent is doing and why.",
    ],
    architecture: [
      {
        label: "Dashboard",
        nodes: [{ name: "Next.js app", detail: "Accounts, audience charts, videos, agent chat, clips and autopilot.", mine: "Built solo" }],
      },
      {
        label: "Agent & worker",
        nodes: [
          { name: "Nova (per account)", detail: "Claude Opus 5 / Sonnet 5 with the account's profile, memory and live data.", mine: "Built solo" },
          { name: "Worker", detail: "Sync, analysis, sourcing, clipping and rendering as retryable jobs.", mine: "Built solo" },
          { name: "SQLite + Drizzle", detail: "Accounts, snapshots, posts, jobs, chats and memory." },
        ],
      },
      {
        label: "Media",
        nodes: [
          { name: "yt-dlp + ffmpeg", detail: "Download sources and cut them." },
          { name: "Remotion", detail: "Renders finished 1080×1920 clips." },
          { name: "After Effects agent", detail: "Builds the edit inside After Effects for review.", mine: "My other project" },
        ],
      },
      {
        label: "Publishing",
        nodes: [
          { name: "Phone driver", detail: "Python + uiautomator2 over adb: opens the video in TikTok, writes the caption, taps Post.", mine: "Built solo" },
          { name: "Android phone", detail: "Plugged into the PC over USB, logged in to the account." },
        ],
      },
    ],
    flow: [
      { title: "Sync the account", where: "Worker", detail: "Followers, views, likes and per-video stats are pulled into snapshots." },
      { title: "Read the numbers", where: "Claude", detail: "Nova writes what's actually working and what to make next, from live data only." },
      { title: "Find the source", where: "yt-dlp · DVIDS", detail: "A long interview or public-domain footage that tells the chosen story." },
      { title: "Cut the clip", where: "ffmpeg · Remotion · AE", detail: "Captions become sentences, the moment is picked, then it's cut, captioned and rendered." },
      { title: "Post it", where: "Android phone", detail: "At the slot, the worker opens the clip in TikTok on the phone, writes the caption and hashtags and taps Post. A late clip goes out as soon as it's ready." },
    ],
    stats: [
      { value: "1", label: "agent per account, with memory of only that account" },
      { value: "3", label: "videos a week on Autopilot, timed to the account's best slots" },
      { value: "20", label: "integrations: sources, media, voice and rendering" },
      { value: "0", label: "taps on the phone: the video is opened, captioned and posted by the agent" },
    ],
    challenges: [
      {
        problem: "An agent that makes up numbers is worse than no agent.",
        solution: "Nova may only quote numbers from live data and has to say when something is missing. Its analysis is rebuilt from fresh snapshots."
      },
      {
        problem: "Downloading and rendering video is slow and often fails.",
        solution: "Each step is a job with retries and exponential backoff, run by a separate worker so the dashboard stays fast."
      },
      {
        problem: "Remotion needs React 18, but the app runs on React 19.",
        solution: "Remotion lives in its own workspace and is driven through its command line: settings go in as JSON and a finished mp4 comes out."
      },
      {
        problem: "Footage rights: archive.org mirrors a lot of copyrighted material.",
        solution: "Sources are limited to verifiable public-domain collections, clips start as unverified, and music only comes from a folder the owner filled."
      },
      {
        problem: "Podcast captions arrive as one long stream of words.",
        solution: "They're grouped into sentences first, so cuts, captions and effects land on real sentence boundaries."
      },
      {
        problem: "TikTok's API won't publish for an app that hasn't passed its audit.",
        solution: "The video is posted the way a person would: through the TikTok app on an Android phone, driven over adb. Pop-ups are dismissed as they appear, every run ends with a screenshot, and a failed post retries with backoff."
      }
    ],
    learned: [
      "Designing an agent with memory that the user can steer in plain language.",
      "Building long-running pipelines that recover from failures on their own.",
      "Treating rights and safety as product requirements, not an afterthought."
    ],
    stack: ["Next.js", "TypeScript", "Claude", "SQLite", "Drizzle", "ffmpeg", "yt-dlp", "Remotion", "Zod", "Python", "adb", "uiautomator2"],
    related: {
      slug: "agentic-video-editing",
      label: "Agentic Video Editing",
      note: "Two halves of one system. This side watches the account and decides what to make; the editing agent builds the clip inside After Effects and hands back a project to review.",
    },
    videos: [
      {
        src: "/media/tiktok-agent-autopost.mp4",
        poster: ttAutopostPoster,
        caption: "automatic publishing: TikTok opens the clip, the caption and hashtags are typed in, and it lands on Post. This recording is a dry run, so it stops there",
      },
      {
        src: "/media/tiktok-agent-dashboard.mp4",
        poster: ttVideoPoster,
        caption: "the control room: account, autopilot, Nova's read of the numbers and the clips it made",
      },
    ],
    desktop: [
      { src: ttAgent, caption: "Account: autopilot, Nova chat and clips it made" },
      { src: ttAudience, caption: "Audience trends and Nova's analysis" },
      { src: ttVideos, caption: "Videos, most viewed first" },
      { src: ttAccounts, caption: "Accounts overview" },
    ],
  },
  {
    slug: "agentic-video-editing",
    title: "Agentic Video Editing",
    tagline: "AI agents that operate After Effects: they edit, render a frame, look at it, and fix their own mistakes.",
    year: "2026",
    status: "In progress",
    category: "AI & Agents",
    role: "Solo: research, PRD, architecture, build",
    brief: {
      problem: "Matching the editing style of a reference video is expert work done frame by frame, and After Effects has no API an agent can call.",
      contribution: "Solo: the research, PRD, architecture and build, including the ExtendScript bridge that lets an agent drive After Effects.",
      result: "In progress, with the core loop proven: the agent edits, renders a frame, looks at it with vision and corrects itself — tested with a deliberately misplaced layer it had to catch.",
      shipping: [
        { label: "Research build", value: "In progress; runs against a local After Effects install" },
      ],
    },
    summary:
      "The goal is to take the editing style of a reference video (pacing, typography, motion intensity, where the emphasis lands) and apply it to new footage in After Effects, without an expert doing it frame by frame.\n\nAgents drive After Effects through a bridge I wrote, render frames, look at them with vision, and correct what's wrong. It is also the editor behind TikTok Agent Control: that agent picks the story, the source and the narration, then hands the footage here. What comes back is not a finished file but an edit sitting in an After Effects project, ready for a person to review and export.",
    highlights: [
      "Built an ExtendScript file-IPC bridge so an agent can run After Effects operations unattended and get structured results back.",
      "Proved the loop with an injected fault: a text layer is secretly placed off-centre, and the only way to catch it is to render a frame and look. The agent finds and fixes it.",
      "Architecture uses a blackboard with typed messages, with the Edit Plan as its backbone. Every change is journaled with its rationale, for audit and rollback.",
      "The Critic runs in an isolated context and never sees the executor's reasoning, so it judges the output rather than the argument.",
      "Style profiles extracted from reference videos, with deterministic signal processing (shots, beats, transcripts) kept out of the model. Agents only handle judgment.",
      "No agent framework: peer-to-peer coordination is the product, so it's a few hundred lines on the Anthropic SDK.",
      "Wrote the PRD, architecture and specs first, and ran spikes to answer the riskiest questions before building.",
    ],
    architecture: [
      {
        label: "Input",
        nodes: [
          { name: "Reference video", detail: "The style to match." },
          { name: "New footage", detail: "The material to edit." },
        ],
      },
      {
        label: "Agents (TypeScript + Anthropic SDK)",
        nodes: [
          { name: "Style analyst", detail: "Turns measured signals into a style profile.", mine: "Built solo" },
          { name: "Executor", detail: "Plans the edit and applies it in After Effects.", mine: "Built solo" },
          { name: "Critic", detail: "Isolated. Judges rendered frames against the brief and profile.", mine: "Built solo" },
        ],
      },
      {
        label: "After Effects",
        nodes: [{ name: "File-IPC bridge", detail: "ExtendScript: the only way agents can change the project. Every change is journaled.", mine: "Built solo" }],
      },
    ],
    flow: [
      { title: "Read the reference", where: "ffmpeg + analyst", detail: "Shots, beats and transcript are measured, then turned into a style profile." },
      { title: "Plan the edit", where: "Executor", detail: "Choices go into the Edit Plan, each with a reason." },
      { title: "Apply in After Effects", where: "Bridge", detail: "Operations run through the bridge and come back as structured results." },
      { title: "Render and look", where: "Critic", detail: "A frame is rendered and judged with vision, without the executor's reasoning." },
      { title: "Revise or stop", where: "Loop", detail: "Fix what's wrong and try again, or stop when it no longer improves." },
    ],
    stats: [
      { value: "2", label: "agents: an executor, and a critic that never sees its reasoning" },
      { value: "Vision", label: "check on a rendered frame before any edit is accepted" },
      { value: "6", label: "design docs: PRD, architecture and specs" },
      { value: "23", label: "experiment runs so far" },
    ],
    challenges: [
      {
        problem: "After Effects has no API an agent can call.",
        solution: "An ExtendScript bridge watches a folder for requests, runs the operations inside After Effects and writes back structured results."
      },
      {
        problem: "Tool results said everything was fine even when the frame looked wrong.",
        solution: "The agent has to render a frame and look at it. A test with a deliberately misplaced layer showed it catches problems that only show up on screen."
      },
      {
        problem: "An agent judging its own work tends to approve it.",
        solution: "The Critic runs separately and only sees the brief, the style profile and the frames, never the executor's reasoning."
      },
      {
        problem: "Loops that never converge waste time and money.",
        solution: "Plateau detection is part of the design: the system says when it stopped improving instead of quietly shipping a twelfth attempt."
      }
    ],
    learned: [
      "Writing the PRD and architecture before code, and running spikes to rule out risky ideas early.",
      "Where AI models help and where plain code wins: measuring signals versus making judgments.",
      "Coordinating several agents without a framework."
    ],
    stack: ["TypeScript", "Anthropic SDK", "Zod", "After Effects", "ExtendScript", "ffmpeg"],
    videos: [
      {
        src: "/media/ae-agent-output.mp4",
        poster: aveOutputPoster,
        caption: "the finished clip the agent made: cut, captions, treatments and cutaways",
        hasSound: true,
      },
      {
        src: "/media/ae-agent-build.mp4",
        poster: aveBuildPoster,
        caption: "After Effects building the edit on its own: the cut, then treatments, then caption cards (sped up)",
      },
    ],
    desktop: [
      { src: aveBuildMid, caption: "A text treatment lands on the cut while the timeline fills" },
      { src: aveBuildComplete, caption: "Pipeline done: 12 caption cards placed, project saved to edit.aep" },
      { src: aveTerminal, caption: "The pipeline reporting each stage as it runs" },
      { src: aveWarning, caption: "It warns before the After Effects build starts, with no pause between stages" },
    ],
    related: {
      slug: "tiktok-agent-control",
      label: "TikTok Agent Control",
      note: "Two halves of one system. The agent that watches the account decides what to make, then hands the source and the narration over here to be edited.",
    },
  },
];

/**
 * The three shown at the top of the home page: the commercial app I built
 * alone, the product I shipped to a store, and the AI system I designed end
 * to end. Everything else is further down, in the order I built it.
 */
export const featured = ["gibud", "fitmind-ai", "ai-interview-coach"]
  .map((slug) => projects.find((p) => p.slug === slug)!)
  .filter(Boolean);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
