# Cal.com Integration Setup

## Overview
Tous les boutons "Book a Demo" sur le site utilisent maintenant Cal.com pour la planification de démos avec un iframe intégré au lieu de rediriger vers une page de contact.

## Configuration

### 1. Package
Le package `@calcom/embed-react` est utilisé pour intégrer le calendrier Cal.com directement dans un modal.

**Aucune clé API n'est nécessaire** - l'intégration utilise un iframe public.

### 2. Composant BookDemoButton
Localisation: `/components/book-demo-button.tsx`

Le composant `BookDemoButton` ouvre automatiquement un modal Cal.com lorsqu'on clique dessus.

#### Utilisation:
```tsx
import { BookDemoButton } from "@/components/book-demo-button";

// Utilisation basique
<BookDemoButton>Book a Demo</BookDemoButton>

// Avec personnalisation
<BookDemoButton
  variant="primary" // ou "secondary", "brand"
  className="mt-4"
  calLink="anis-nanai-ibmriq/satsu-discovery-meeting" // Lien Cal.com
  namespace="satsu-discovery-meeting" // Namespace unique
>
  Réserver une démo
</BookDemoButton>
```

### 3. Où les boutons sont utilisés

Les boutons Cal.com ont été intégrés dans:
- **Navbar** (desktop, mobile, et floating nav)
- **Hero section** (page d'accueil)
- **CTA component** (utilisé sur toutes les pages)
- **Footer**
- **Toutes les pages produits:**
  - ChatGPT Analytics
  - Competitive Intelligence
  - Revenue Attribution
  - Content Strategy
  - Agent Tracking

## Personnalisation

### Changer le lien de planification
Pour modifier le lien Cal.com par défaut, mettez à jour les props dans `book-demo-button.tsx` :
```tsx
<BookDemoButton
  calLink="votre-username/votre-event"
  namespace="votre-namespace-unique"
>
  Book a Demo
</BookDemoButton>
```

### Personnaliser l'apparence du calendrier

**🎨 Thème automatique (Light/Dark Mode):**

Le calendrier s'adapte automatiquement au thème du site grâce à `next-themes`:
- **Mode clair:** Calendrier blanc avec texte noir
- **Mode sombre:** Calendrier sombre avec texte blanc
- **Changement dynamique:** Le calendrier change instantanément quand vous basculez le thème

**Retirer le branding Cal.com:**

La configuration actuelle inclut `"hide-branding": "true"` qui retire la mention "Powered by Cal.com".

⚠️ **Important:** Cette option nécessite un plan Cal.com payant (Pro ou supérieur). Si vous utilisez le plan gratuit, la mention Cal.com restera visible mais s'adaptera au thème.

**Options de personnalisation:**

Configuration du thème dans `cal-booker.tsx` ligne 16-32 :
```tsx
const { theme, systemTheme } = useTheme();
const currentTheme = theme === "system" ? systemTheme : theme;

cal("ui", {
  hideEventTypeDetails: false,
  layout: "month_view", // ou "week_view", "column_view"
  theme: currentTheme === "dark" ? "dark" : "light", // Adapte au thème
  styles: {
    branding: {
      brandColor: currentTheme === "dark" ? "#ffffff" : "#000000", // Couleur adaptée
    },
  },
});
```

Configuration de l'iframe ligne 40-44 :
```tsx
config={{
  layout: "month_view",
  theme: currentTheme === "dark" ? "dark" : "light", // Thème adaptatif
  "hide-branding": "true", // Retire "Powered by Cal.com" (nécessite plan Pro)
}}
```

Modifiez le style ligne 34 :
```tsx
style={{ width: "100%", height: "100%", overflow: "scroll" }}
```

## Test

Pour tester l'intégration:
1. Démarrez le serveur de développement: `npm run dev`
2. Cliquez sur n'importe quel bouton "Book a Demo"
3. Un modal devrait s'ouvrir avec le calendrier Cal.com intégré
4. Le calendrier affiche directement les disponibilités en vue mensuelle

## Composants créés

- **`/components/cal-booker.tsx`** - Composant qui intègre l'iframe Cal.com
- **`/components/cal-modal.tsx`** - Modal qui encapsule le calendrier
- **`/components/book-demo-button.tsx`** - Bouton qui ouvre le modal

## Documentation Cal.com
- [Documentation officielle](https://cal.com/docs)
- [Embed React](https://github.com/calcom/cal.com/tree/main/packages/embeds/embed-react)
