import { EntityConfig } from '@/shared/lib/types/entity'
import './category/category.admin'

export const adminEntities: EntityConfig[] = [
  {
    name: 'user',
    label: 'Utilisateurs',
    pluralLabel: 'Utilisateurs',
    icon: 'Users',
    endpoints: {
      list: '/users',
      detail: (id: string) => `/users/${id}`,
      create: '/users',
      update: (id: string) => `/users/${id}`,
      delete: (id: string) => `/users/${id}`,
    },
    fields: [
      {
        key: 'id',
        label: 'ID',
        type: 'text',
        readonly: true,
        showInList: true,
        showInDetail: true,
      },
      {
        key: 'name',
        label: 'Nom',
        type: 'text',
        required: true,
        showInList: true,
        showInDetail: true,
        showInForm: true,
      },
      {
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        showInList: true,
        showInDetail: true,
        showInForm: true,
      },
      {
        key: 'emailVerified',
        label: 'Email vérifié',
        type: 'boolean',
        showInList: true,
        showInDetail: true,
      },
      {
        key: 'isAdmin',
        label: 'Administrateur',
        type: 'boolean',
        showInList: true,
        showInDetail: true,
        showInForm: true,
      },
      {
        key: 'createdAt',
        label: 'Créé le',
        type: 'datetime',
        readonly: true,
        showInList: true,
        showInDetail: true,
      },
      {
        key: 'updatedAt',
        label: 'Modifié le',
        type: 'datetime',
        readonly: true,
        showInDetail: true,
      },
    ],
    searchFields: ['name', 'email'],
    defaultSort: { field: 'createdAt', direction: 'desc' },
    pagination: { defaultPageSize: 10 },
  },
  {
    name: 'category',
    label: 'Catégorie',
    pluralLabel: 'Catégories',
    icon: 'Tag',
    endpoints: {
      list: '/categories',
      detail: (id: string) => `/categories/${id}`,
      create: '/categories',
      update: (id: string) => `/categories/${id}`,
      delete: (id: string) => `/categories/${id}`,
    },
    fields: [
      {
        key: 'id',
        label: 'ID',
        type: 'text',
        readonly: true,
        showInList: true,
        showInDetail: true,
      },
      {
        key: 'name',
        label: 'Nom',
        type: 'text',
        required: true,
        showInList: true,
        showInDetail: true,
        showInForm: true,
        placeholder: 'Ex: Technologie, Design, Marketing...',
      },
      {
        key: 'slug',
        label: 'Slug',
        type: 'text',
        required: true,
        showInList: true,
        showInDetail: true,
        showInForm: true,
        placeholder: 'Ex: technologie, design, marketing...',
        description: 'URL-friendly version du nom (lettres minuscules, tirets)',
      },
      {
        key: 'description',
        label: 'Description',
        type: 'textarea',
        showInDetail: true,
        showInForm: true,
        placeholder: 'Description de la catégorie...',
      },
      {
        key: 'color',
        label: 'Couleur',
        type: 'color',
        showInList: true,
        showInDetail: true,
        showInForm: true,
        defaultValue: '#3B82F6',
      },
      {
        key: 'createdAt',
        label: 'Créé le',
        type: 'datetime',
        readonly: true,
        showInList: true,
        showInDetail: true,
      },
      {
        key: 'updatedAt',
        label: 'Modifié le',
        type: 'datetime',
        readonly: true,
        showInDetail: true,
      },
    ],
    searchFields: ['name', 'slug', 'description'],
    defaultSort: { field: 'name', direction: 'asc' },
    pagination: { defaultPageSize: 10 },
    validation: {
      name: {
        required: 'Le nom est requis',
        minLength: { value: 2, message: 'Le nom doit contenir au moins 2 caractères' },
        maxLength: { value: 100, message: 'Le nom ne peut pas dépasser 100 caractères' },
      },
      slug: {
        required: 'Le slug est requis',
        pattern: {
          value: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
          message: 'Le slug doit contenir uniquement des lettres minuscules, chiffres et tirets',
        },
        minLength: { value: 2, message: 'Le slug doit contenir au moins 2 caractères' },
        maxLength: { value: 100, message: 'Le slug ne peut pas dépasser 100 caractères' },
      },
      description: {
        maxLength: { value: 500, message: 'La description ne peut pas dépasser 500 caractères' },
      },
    },
  },
  {
    name: 'blog',
    label: 'Article',
    pluralLabel: 'Articles',
    icon: 'FileText',
    endpoints: {
      list: '/blogs',
      detail: (id: string) => `/blogs/${id}`,
      create: '/blogs',
      update: (id: string) => `/blogs/${id}`,
      delete: (id: string) => `/blogs/${id}`,
    },
    fields: [
      {
        key: 'id',
        label: 'ID',
        type: 'text',
        readonly: true,
        showInList: true,
        showInDetail: true,
      },
      {
        key: 'title',
        label: 'Titre',
        type: 'text',
        required: true,
        showInList: true,
        showInDetail: true,
        showInForm: true,
        placeholder: 'Titre de l\'article...',
      },
      {
        key: 'slug',
        label: 'Slug',
        type: 'text',
        required: true,
        showInList: true,
        showInDetail: true,
        showInForm: true,
        placeholder: 'URL-friendly version du titre',
      },
      {
        key: 'excerpt',
        label: 'Extrait',
        type: 'textarea',
        showInList: true,
        showInDetail: true,
        showInForm: true,
        placeholder: 'Résumé de l\'article...',
      },
      {
        key: 'content',
        label: 'Contenu',
        type: 'editor',
        required: true,
        showInDetail: true,
        showInForm: true,
      },
      {
        key: 'status',
        label: 'Statut',
        type: 'select',
        required: true,
        showInList: true,
        showInDetail: true,
        showInForm: true,
        options: [
          { value: 'draft', label: 'Brouillon' },
          { value: 'published', label: 'Publié' },
          { value: 'archived', label: 'Archivé' },
          { value: 'scheduled', label: 'Programmé' },
        ],
        defaultValue: 'draft',
      },
      {
        key: 'featuredImage',
        label: 'Image mise en avant',
        type: 'image',
        showInList: true,
        showInDetail: true,
        showInForm: true,
      },
      {
        key: 'viewCount',
        label: 'Vues',
        type: 'number',
        readonly: true,
        showInList: true,
        showInDetail: true,
        defaultValue: 0,
      },
      {
        key: 'readTime',
        label: 'Temps de lecture (min)',
        type: 'number',
        showInList: true,
        showInDetail: true,
        showInForm: true,
        defaultValue: 1,
      },
      {
        key: 'authorId',
        label: 'Auteur',
        type: 'relation',
        required: true,
        showInList: true,
        showInDetail: true,
        showInForm: true,
        relationConfig: {
          entity: 'user',
          displayField: 'name',
          valueField: 'id',
        },
      },
      {
        key: 'publishedAt',
        label: 'Publié le',
        type: 'datetime',
        showInList: true,
        showInDetail: true,
        showInForm: true,
      },
      {
        key: 'createdAt',
        label: 'Créé le',
        type: 'datetime',
        readonly: true,
        showInList: true,
        showInDetail: true,
      },
      {
        key: 'updatedAt',
        label: 'Modifié le',
        type: 'datetime',
        readonly: true,
        showInDetail: true,
      },
    ],
    searchFields: ['title', 'excerpt', 'content'],
    filterFields: [
      {
        key: 'status',
        label: 'Statut',
        type: 'select',
        options: [
          { value: 'draft', label: 'Brouillon' },
          { value: 'published', label: 'Publié' },
          { value: 'archived', label: 'Archivé' },
          { value: 'scheduled', label: 'Programmé' },
        ],
      },
      {
        key: 'authorId',
        label: 'Auteur',
        type: 'relation',
        relationConfig: {
          entity: 'user',
          displayField: 'name',
          valueField: 'id',
        },
      },
    ],
    defaultSort: { field: 'createdAt', direction: 'desc' },
    pagination: { defaultPageSize: 10 },
    validation: {
      title: {
        required: 'Le titre est requis',
        minLength: { value: 5, message: 'Le titre doit contenir au moins 5 caractères' },
        maxLength: { value: 200, message: 'Le titre ne peut pas dépasser 200 caractères' },
      },
      slug: {
        required: 'Le slug est requis',
        pattern: {
          value: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
          message: 'Le slug doit contenir uniquement des lettres minuscules, chiffres et tirets',
        },
      },
      content: {
        required: 'Le contenu est requis',
        minLength: { value: 100, message: 'Le contenu doit contenir au moins 100 caractères' },
      },
      authorId: {
        required: 'L\'auteur est requis',
      },
    },
  },
]
