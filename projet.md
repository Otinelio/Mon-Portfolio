# 01 — Informations Générales

| Champ         | Détail                                              |
| ------------- | --------------------------------------------------- |
| **Nom**       | El Papiro                                           |
| **Type**      | Application Web E-Commerce & Marketplace (Supermarché & Épicerie) |
| **Année**     | 2025 - 2026                                         |
| **Équipe**    | DigitalVision                                       |
| **Secteur**   | E-Commerce / Grande Distribution / Delivery         |
| **Plateformes** | Web Responsive (Mobile, Tablette, Desktop)         |
| **Statut**    | Développé / Livré                                   |

# 02 — Présentation

**Quel problème résout l'application ?**
El Papiro résout la difficulté d'accès aux produits de consommation courante (épicerie, produits frais, boissons, entretien, soins) et les pertes de temps liées aux déplacements en magasin physique. L'application permet d'effectuer ses courses alimentaires et ménagères en ligne avec une expérience fluide, rapide et des notifications directes par SMS/WhatsApp.

**À qui est-elle destinée ?**
Elle s'adresse d'une part aux ménages et particuliers souhaitant faire leurs courses en ligne et se faire livrer à domicile, et d'autre part aux gérants de la plateforme (Staff et Administrateurs) qui ont besoin d'un outil puissant pour gérer le catalogue, traiter les commandes et administrer la plateforme.

**Pourquoi a-t-elle été développée ?**
Pour digitaliser la grande distribution et l'épicerie fine locale, offrir un canal de vente directe 24/7 avec un suivi de commande moderne et multi-canal (notifications WhatsApp & SMS via Twilio), et optimiser la chaîne logistique depuis la prise de commande jusqu'à la livraison.

**Quelle est sa proposition de valeur ?**
Une marketplace alimentaire et ménagère complète avec classification par sous-catégories strictes, gestion intelligente du panier et des favoris, système de bannières publicitaires intégrées (Pubs) et notifications automatisées par WhatsApp/SMS pour chaque étape de la commande.

# 03 — Stack Technique

| Couche              | Technologie                                   |
| ------------------- | --------------------------------------------- |
| **Framework Web**   | Laravel 11 / Blade / Alpine.js                |
| **Styles & Assets** | TailwindCSS / Vite                            |
| **Base de données** | PostgreSQL / MySQL                            |
| **Messagerie & OTP**| Twilio SDK (WhatsApp API & SMS)               |
| **Authentification**| Laravel Auth (Multi-rôles: User, Staff, Admin)|
| **SEO & Slugs**     | `cviebrock/eloquent-sluggable`                |
| **Gestion Médias**  | Stockage d'assets dynamiques (Produits, Pubs)|

# 04 — Le Problème

**Le contexte**
Les consommateurs consacrent un temps précieux aux courses du quotidien dans les supermarchés (files d'attente, déplacements, ruptures de stock non signalées).

**Les limites de l'ancien fonctionnement**
- Absence de visibilité en temps réel sur la disponibilité des produits en rayon.
- Manque de suivi réactif sur l'état d'avancement de la livraison de commande.
- Absence d'un canal de communication direct et instantané (ex: WhatsApp) entre la boutique et le client.

**Les besoins utilisateurs**
Un catalogue en ligne clair, catégorisé de façon intuitive, un panier fluide, des listes d'envies (favoris), et une confirmation immédiate des commandes sur leur téléphone portable.

# 05 — La Solution

**L'expérience utilisateur**
El Papiro propose un design moderne et épuré axé sur la clarté des visuels produits et la simplicité de navigation. Les utilisateurs bénéficient de bannières promotionnelles ciblées, d'une recherche facilitée par sous-catégories et d'un checkout transparent.

**Le parcours principal**
1. Le client parcourt la boutique en ligne par catégories et sous-catégories d'articles.
2. Il ajoute les articles souhaités à son panier ou ses favoris.
3. Lors de la validation de la commande, le client indique ses informations et choisit son mode de paiement.
4. L'application génère la commande et déclenche l'envoi automatique d'une notification (SMS/WhatsApp via Twilio).
5. L'équipe Staff/Admin reçoit la notification, prépare la commande et met à jour son statut en temps réel.

**Les choix techniques**
Laravel 11 a été sélectionné pour sa robustesse, sa sécurité native et sa gestion simplifiée des rôles et autorisations. L'intégration de Twilio permet d'assurer un engagement client élevé via le canal privilégié de l'utilisateur (WhatsApp).

# 06 — Ce qui a été conçu / livré

| Livrable                      | Statut |
| ----------------------------- | ------ |
| Architecture BDD & Migrations | ✅     |
| E-Commerce Front (Boutique)   | ✅     |
| Espace Client (Panier/Favoris)| ✅     |
| Espace Staff & Admin          | ✅     |
| Intégration Twilio (SMS/WA)   | ✅     |
| Module d'Annonces & Pubs      | ✅     |

# 07 — Fonctionnalités Principales

**Côté Client (Acheteur)**
- Catalogue de produits structuré par catégories et sous-catégories (Huiles, Pâtes, Conserves, Boissons, Soins, etc.).
- Gestion de panier dynamique avec calcul en temps réel.
- Liste de favoris pour enregistrer ses produits préférés.
- Suivi de commande et notifications d'avancement via WhatsApp et SMS.

**Côté Staff / Administrateur**
- Tableau de bord complet de gestion des produits (CRUD avec images, stocks, prix, statut actif/inactif).
- Gestion des catégories et sous-catégories.
- Traitement et suivi des commandes clients avec système de notifications.
- Gestion des espaces publicitaires et bannières promotionnelles (`banner`, `section1`, `section2`).
- Contrôle des accès avec mot de passe d'administration dédié (`ADMIN_ACCESS_PASSWORD`).

# 08 — Défis Techniques

- **Modélisation du Catalogue et Sous-Catégories :** Structuration fine des produits via des Enums stricts pour les sous-catégories afin d'assurer un filtrage rapide et cohérent.
- **Intégration Multi-Canal Twilio :** Configuration synchrone des envois WhatsApp et SMS pour garantir la délivrabilité des notifications de commande même en cas d'indisponibilité du canal data.
- **Gestion des Rôles et Sécurité :** Mise en place d'un contrôle d'accès strict entre les utilisateurs simples, les agents du staff et l'administration générale.

# 09 — Ma Contribution

Au sein de l'équipe **DigitalVision**, j'ai assuré :
- **Architecture & Modélisation BDD :** Conception de la structure de données (Users, Produits, Catégories, Paniers, Commandes, Paiements, Pubs, NotificationCommandes).
- **Développement Backend Laravel :** Implémentation de la logique métier, gestion des paniers, contrôleurs d'administration, et routage sécurisé.
- **Intégration des Services Tiers :** Développement du service `TwilioMessenger` pour l'envoi automatique de notifications de commande par WhatsApp et SMS.
- **Seeding & Données de Test :** Création d'un système complet de Seeding dynamique intégrant le téléchargement automatique d'images réelles haute définition.

# 10 — Chiffres Clés

| Métrique                   | Valeur |
| -------------------------- | ------ |
| Tables en Base de Données  | 14 tables |
| Niveaux de Rôles           | 3 (User, Staff, Admin) |
| Canaux de Notification     | 2 (WhatsApp API & SMS Twilio) |

# 11 — Ce qui rend le projet unique

El Papiro se distingue par son approche globale du commerce de proximité. En combinant la puissance du e-commerce moderne à la réactivité des messageries instantanées comme WhatsApp, l'application offre une expérience de vente directe ultra-accessible pour les clients et un outil de gestion clé en main pour les commerçants.