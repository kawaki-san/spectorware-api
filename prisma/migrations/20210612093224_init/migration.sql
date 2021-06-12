-- CreateTable
CREATE TABLE `Packages` (
    `name` VARCHAR(100) NOT NULL,
    `cost_mon` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `databases` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `domains` INTEGER NOT NULL DEFAULT 0,
    `mailboxes` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `subdomains` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `popular` BOOLEAN,
    `cost_ann` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `storage` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TLDs` (
    `name` VARCHAR(100) NOT NULL,
    `cost` DECIMAL(10, 2) NOT NULL,
    `featured` BOOLEAN,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
