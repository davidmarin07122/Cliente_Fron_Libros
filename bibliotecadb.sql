-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2021 a las 14:23:45
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bibliotecadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `book`
--

CREATE TABLE `book` (
  `id_book` int(11) NOT NULL,
  `isbn` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `gender` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `date` int(11) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `book`
--

INSERT INTO `book` (`id_book`, `isbn`, `name`, `gender`, `date`, `status`) VALUES
(1, 'nepomuceno', 'malerr', 'drma', 23062022, 1),
(2, 'erer55', 'MElooo', 'aw3', 0, 0),
(3, '343rrr', '100weee', 'aw3', 0, 0),
(4, '343ccc', 'libro', 'drama', 9112021, 0),
(9, 'wwe2', 'sder', 'acc', 0, 0),
(10, '2e32e', 'sddff', 'dasd', 0, 1),
(11, '2e32e', 'sddff', 'dasd', 3434, 1),
(12, 'awd22', 'asdddd', 'ded', 23434, 2),
(18, '3e3ee3eeeeee', 'tioo', 'rent', 23, 3),
(20, '23bv', 'mil años de soledad', 'drama', 30112021, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `renta`
--

CREATE TABLE `renta` (
  `id` int(11) NOT NULL,
  `libro_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `rendate` varchar(15) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `renta`
--

INSERT INTO `renta` (`id`, `libro_id`, `usuario_id`, `rendate`) VALUES
(6, 3, 3, '23072021'),
(7, 9, 5, '2334479'),
(9, 10, 6, '31102034'),
(10, 20, 2, '30112021');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id_user`, `name`, `phone`, `email`, `password`) VALUES
(2, 'admin', 12345, 'admin@gmail.com', 'admin123'),
(3, 'Test', 2223333, 'Test@hotmail.com', 'test321'),
(5, 'pepito', 543787421, 'pepito@gmail.com', 'pepito123'),
(6, 'nepe', 2147483647, 'nepe@hmail.com', 'nepe123'),
(7, '', 0, '', ''),
(8, '', 0, '', ''),
(9, '', 0, '', ''),
(10, '', 0, '', ''),
(11, '', 0, '', ''),
(12, '', 0, '', ''),
(13, '', 0, '', ''),
(14, 'sdff', 0, 'edfsdfd@gui.com', 'dfdfef44'),
(15, '', 0, '', ''),
(17, 'davidd', 12233434, 'dam@gmail.com', '123'),
(18, 'jor', 12323, 'meljo@gmail.com', '2344'),
(19, '', 0, '', ''),
(20, 'jose', 2322443, 'jose@gmail.com', '123'),
(21, '', 0, '', ''),
(22, 'davidd07', 303644434, 'davis@gmail.com', '123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id_book`);

--
-- Indices de la tabla `renta`
--
ALTER TABLE `renta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`usuario_id`),
  ADD KEY `fk_book` (`libro_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `book`
--
ALTER TABLE `book`
  MODIFY `id_book` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `renta`
--
ALTER TABLE `renta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `renta`
--
ALTER TABLE `renta`
  ADD CONSTRAINT `fk_book` FOREIGN KEY (`libro_id`) REFERENCES `book` (`id_book`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`usuario_id`) REFERENCES `user` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
