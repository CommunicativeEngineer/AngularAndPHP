-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Dim 24 Mars 2019 à 21:21
-- Version du serveur: 5.6.12-log
-- Version de PHP: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `db`
--
CREATE DATABASE IF NOT EXISTS `db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `db`;

-- --------------------------------------------------------

--
-- Structure de la table `actualite`
--

CREATE TABLE IF NOT EXISTS `actualite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `datee` date NOT NULL,
  `contenu` varchar(30000) NOT NULL,
  `fichier` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=65 ;

--
-- Contenu de la table `actualite`
--

INSERT INTO `actualite` (`id`, `titre`, `datee`, `contenu`, `fichier`) VALUES
(1, 'Ce qui reste pour la loi sur les startups', '2018-05-10', 'Ce qui reste pour la loi sur les startups', 'startup.jpg'),
(2, 'Dispositions fiscales prévues suite à la promulgation de la loi de finances pour la gestion 2018', '2017-12-27', 'Dispositions fiscales prévues suite à la promulgation de la loi de finances pour la gestion 2018', 'fiscalite.jpg'),
(3, 'PRINCIPALES DISPOSITIONS PRÉVUES PAR LA LOI DE FINANCES POUR LA GESTION 2015', '2015-01-08', 'La loi n° 2014 - 59 du 26 décembre 2014, portant loi de finances pour l''année 2015, a prévu les principales dispositions suivantes : 1. Améliorer la cohérence entre les taux de retenue à la source et les impôts perçus (art 17) Les', 'finance.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`username`, `password`, `email`) VALUES
('wabexpert', 'wabexpert', 'contact@wab-expert.com');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL,
  `tel1` varchar(3000) NOT NULL,
  `tel2` varchar(3000) NOT NULL,
  `fax` varchar(3000) NOT NULL,
  `mail` varchar(3000) NOT NULL,
  `adresse` varchar(3000) NOT NULL,
  `facebook` varchar(3000) NOT NULL,
  `linkedin` varchar(3000) NOT NULL,
  `twitter` varchar(3000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `contact`
--

INSERT INTO `contact` (`id`, `tel1`, `tel2`, `fax`, `mail`, `adresse`, `facebook`, `linkedin`, `twitter`) VALUES
(1, '(+216) 71 948 214', '(+216) 71 949 214', '(+216) 71 948 177', 'contact@wab-expert.com', 'Cabinet Wajdi ABDELHEDI - Résidence LES LILAS, Bloc B, 5ème étage, bureau n°11 Centre Urbain Nord, 1082, Tunis', 'https://www.facebook.com/wabexpert', 'https://www.linkedin.com/in/wajdi-abdelhedi-178148a', 'https://twitter.com/WajdiABDELHEDI');

-- --------------------------------------------------------

--
-- Structure de la table `contact_form`
--

CREATE TABLE IF NOT EXISTS `contact_form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `sujet` varchar(200) NOT NULL,
  `messagee` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Contenu de la table `contact_form`
--

INSERT INTO `contact_form` (`id`, `nom`, `prenom`, `telephone`, `email`, `sujet`, `messagee`) VALUES
(1, 'prénom', 'nom', '123', 'monmail@gmail.com', 'sujet', 'message de salutation');

-- --------------------------------------------------------

--
-- Structure de la table `newsletter_form`
--

CREATE TABLE IF NOT EXISTS `newsletter_form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Contenu de la table `newsletter_form`
--

INSERT INTO `newsletter_form` (`id`, `email`) VALUES
(13, 'monmail@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

CREATE TABLE IF NOT EXISTS `publication` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `titre` varchar(250) NOT NULL,
  `lien` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Contenu de la table `publication`
--

INSERT INTO `publication` (`id`, `date`, `titre`, `lien`) VALUES
(1, '2017-12-25', 'Dispositions fiscales prévues suite à la promulgation de la loi de finances pour la gestion 2018', 'pdf1.pdf'),
(2, '2017-04-25', 'Nouvelles incitations fiscales et financières en Tunisie', 'pdf2.pdf'),
(3, '2013-07-23', 'CREATION D’ENTREPRISE : PROFIL DE L’ENTREPRENEUR ET IDEE DE PROJET', 'pdf3.pdf');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
